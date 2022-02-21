package lt.vtmc.GintautasButkus.CallCenter.Controller;

import java.time.LocalDateTime;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.ResponseStatus;
import org.springframework.web.bind.annotation.RestController;

import lt.vtmc.GintautasButkus.CallCenter.Exception.ClientNotFoundException;
import lt.vtmc.GintautasButkus.CallCenter.Exception.SurveyNotFoundException;
import lt.vtmc.GintautasButkus.CallCenter.Model.Survey;
import lt.vtmc.GintautasButkus.CallCenter.Repository.ClientRepository;
import lt.vtmc.GintautasButkus.CallCenter.Repository.SurveyRepository;

@RestController
@RequestMapping("/api")
public class SurveyController {
	@Autowired
	private ClientRepository clientRepository;

	@Autowired
	private SurveyRepository surveyrepository;

	@GetMapping("/survey/get/{client_id}")
	public List<Survey> getSurveys(@PathVariable Long client_id) {
		if (!clientRepository.existsById(client_id)) {
			throw new ClientNotFoundException("No client exists with ID " + client_id);
		}
		return surveyrepository.findByClientId(client_id);
	}

	@GetMapping("/survey/get_all")
	public List<Survey> getAllSurveys() {
		return surveyrepository.findAll();
	}

	@GetMapping("/survey/get_one/{id}")
	public Survey getSurveyById(@PathVariable Long id) {
		return surveyrepository.findById(id).orElseThrow(() -> new SurveyNotFoundException("No survey with ID " + id));
	}

	@PostMapping("/survey/add/{client_id}")
	@ResponseStatus(HttpStatus.CREATED)
	public void createSurvey(@PathVariable Long client_id, @RequestBody Survey surveyDetails) {
		Survey survey = clientRepository.findById(client_id).map(client -> {
			surveyDetails.setSurveyDate(LocalDateTime.now());
			surveyDetails.setClient(client);
			return surveyrepository.save(surveyDetails);
		}).orElseThrow(() -> new ClientNotFoundException("No client exists with such ID " + client_id));
		surveyrepository.save(survey);
	}

	@PutMapping("/survey/update/{id}")
	public ResponseEntity<Survey> updateSurvey(@PathVariable Long id, @RequestBody Survey surveyObj) {
		Survey survey = surveyrepository.findById(id)
				.orElseThrow(() -> new SurveyNotFoundException("No survey found with this ID" + id));
		survey.setServiceQuality(surveyObj.getServiceQuality());
		survey.setServiceRecommendation(surveyObj.getServiceRecommendation());

		Survey amendedSurvey = surveyrepository.save(survey);
		return ResponseEntity.ok(amendedSurvey);
	}

	@DeleteMapping("/survey/delete/{id}")
	@ResponseStatus(HttpStatus.NO_CONTENT)
	public void deleteSurvey(@PathVariable Long id) {
		surveyrepository.deleteById(id);
	}

	@DeleteMapping("/client_survey/delete/{client_id}")
	@ResponseStatus(HttpStatus.NO_CONTENT)
	public void deleteAllClientSurveys(@PathVariable Long client_id) {
		if (!clientRepository.existsById(client_id)) {
			throw new ClientNotFoundException("No client exists with ID " + client_id);
		}
		surveyrepository.deleteByClientId(client_id);
	}
}
