package lt.vtmc.GintautasButkus.CallCenter.Repository;

import java.util.List;

import javax.transaction.Transactional;

import org.springframework.data.jpa.repository.support.JpaRepositoryImplementation;

import lt.vtmc.GintautasButkus.CallCenter.Model.Survey;

public interface SurveyRepository extends JpaRepositoryImplementation<Survey, Long> {
	List<Survey> findByClientId(Long clientId);

	@Transactional
	void deleteByClientId(long clientId);
}
