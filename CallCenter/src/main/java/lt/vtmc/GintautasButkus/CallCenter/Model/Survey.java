package lt.vtmc.GintautasButkus.CallCenter.Model;

import java.time.LocalDateTime;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.FetchType;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.ManyToOne;
import javax.persistence.Table;
import javax.validation.constraints.Max;
import javax.validation.constraints.Min;

import org.hibernate.annotations.OnDelete;
import org.hibernate.annotations.OnDeleteAction;

import com.fasterxml.jackson.annotation.JsonIgnore;
import com.sun.istack.NotNull;

@Entity
@Table(name = "survey")
public class Survey {

	@Id
	@GeneratedValue(strategy = GenerationType.SEQUENCE, generator = "survey_generator")
	private Long surveyId;

	@NotNull
	@Column(name = "survey_date")
	private LocalDateTime surveyDate;

	@Min(1)
	@Max(10)
	@NotNull
	@Column(name = "service_quality")
	private Integer serviceQuality;

	@Min(1)
	@Max(10)
	@NotNull
	@Column(name = "service_recommendation")
	private Integer serviceRecommendation;

	@ManyToOne(fetch = FetchType.LAZY, optional = false)
	@JoinColumn(name = "client_id", nullable = false)
	@OnDelete(action = OnDeleteAction.CASCADE)
	@JsonIgnore
	private Client client;

	public Long getSurveyId() {
		return surveyId;
	}

	public void setSurveyId(Long surveyId) {
		this.surveyId = surveyId;
	}

	public LocalDateTime getSurveyDate() {
		return surveyDate;
	}

	public void setSurveyDate(LocalDateTime surveyDate) {
		this.surveyDate = surveyDate;
	}

	public Integer getServiceQuality() {
		return serviceQuality;
	}

	public void setServiceQuality(Integer serviceQuality) {
		this.serviceQuality = serviceQuality;
	}

	public Integer getServiceRecommendation() {
		return serviceRecommendation;
	}

	public void setServiceRecommendation(Integer serviceRecommendation) {
		this.serviceRecommendation = serviceRecommendation;
	}

	public Client getClient() {
		return client;
	}

	public void setClient(Client client) {
		this.client = client;
	}

}
