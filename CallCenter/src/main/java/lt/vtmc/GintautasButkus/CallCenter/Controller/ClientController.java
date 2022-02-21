package lt.vtmc.GintautasButkus.CallCenter.Controller;

import java.time.LocalDateTime;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.ResponseStatus;
import org.springframework.web.bind.annotation.RestController;

import lt.vtmc.GintautasButkus.CallCenter.Exception.ClientAlreadyExistsException;
import lt.vtmc.GintautasButkus.CallCenter.Exception.ClientNotFoundException;
import lt.vtmc.GintautasButkus.CallCenter.Model.Client;
import lt.vtmc.GintautasButkus.CallCenter.Repository.ClientRepository;

@CrossOrigin(origins = "http://localhost:3000")
@RestController
@RequestMapping("/api/client")
public class ClientController {

	@Autowired
	ClientRepository clientRepository;

	@GetMapping
	public List<Client> getClients() {
		return clientRepository.findAll();
	}

	@GetMapping("/{id}")
	public Client getClientById(@PathVariable Long id) {
		return clientRepository.findById(id)
				.orElseThrow(() -> new ClientNotFoundException("No client exists with id" + id));
	}

	@PostMapping()
	@ResponseStatus(HttpStatus.CREATED)
	public void createClient(@RequestBody Client clientObj) {
		if (getClients().stream()
				.anyMatch(client -> client.getFirstName().equals(clientObj.getFirstName())
						&& client.getLastName().equals(clientObj.getLastName())
						&& client.getBirthDate().equals(clientObj.getBirthDate()))) {

			throw new ClientAlreadyExistsException("User already exists");
		} else {
			clientObj.setStartDateTime(LocalDateTime.now());
			clientRepository.save(clientObj);
		}
	}

	@DeleteMapping("/{id}")
	@ResponseStatus(HttpStatus.NO_CONTENT)
	public void deleteClient(@PathVariable Long id) {
		clientRepository.deleteById(id);
	}

	@PutMapping("/update/{id}")
	public ResponseEntity<Client> updateClient(@PathVariable Long id, @RequestBody Client clientDetails) {
		Client client = clientRepository.findById(id)
				.orElseThrow(() -> new ClientNotFoundException("No client found with this ID" + id));
		client.setFirstName(clientDetails.getFirstName());
		client.setLastName(clientDetails.getLastName());
		client.setPhoneNumber(clientDetails.getPhoneNumber());
		client.setBirthDate(clientDetails.getBirthDate());
		client.setCity(clientDetails.getCity());
		client.setAddress(clientDetails.getAddress());

		Client updatedClient = clientRepository.save(client);
		return ResponseEntity.ok(updatedClient);
	}

}
