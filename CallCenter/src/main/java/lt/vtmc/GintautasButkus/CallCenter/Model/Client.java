package lt.vtmc.GintautasButkus.CallCenter.Model;

import java.time.LocalDateTime;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Table;

import com.sun.istack.NotNull;

@Entity
@Table(name = "clients")
public class Client {

	@Id
	@GeneratedValue(strategy = GenerationType.SEQUENCE, generator = "client_generator")
//	@Column(name = "id")
	private Long id;

	@NotNull
	@Column(name = "first_name")
	private String firstName;

	@NotNull
	@Column(name = "last_name")
	private String lastName;

	@NotNull
	@Column(name = "birth_date")
	private String birthDate;

	@NotNull
	@Column(name = "phone_number")
	private String phoneNumber;

	@Column(name = "start_date_time")
	private LocalDateTime startDateTime;

	@Column(name = "city")
	private String city;

	@Column(name = "address")
	private String address;

	public Client() {

	}

	public Client(String firstName, String lastName, String birthDate, String phoneNumber, LocalDateTime startDateTime,
			String city, String address) {
		super();
		this.firstName = firstName;
		this.lastName = lastName;
		this.birthDate = birthDate;
		this.phoneNumber = phoneNumber;
		this.startDateTime = startDateTime;
		this.city = city;
		this.address = address;
	}

	public Long getId() {
		return id;
	}

	public void setId(Long id) {
		this.id = id;
	}

	public String getFirstName() {
		return firstName;
	}

	public void setFirstName(String firstName) {
		this.firstName = firstName;
	}

	public String getLastName() {
		return lastName;
	}

	public void setLastName(String lastName) {
		this.lastName = lastName;
	}

	public String getBirthDate() {
		return birthDate;
	}

	public void setBirthDate(String birthDate) {
		this.birthDate = birthDate;
	}

	public String getPhoneNumber() {
		return phoneNumber;
	}

	public void setPhoneNumber(String phoneNumber) {
		this.phoneNumber = phoneNumber;
	}

	public LocalDateTime getStartDateTime() {
		return startDateTime;
	}

	public void setStartDateTime(LocalDateTime startDateTime) {
		this.startDateTime = startDateTime;
	}

	public String getCity() {
		return city;
	}

	public void setCity(String city) {
		this.city = city;
	}

	public String getAddress() {
		return address;
	}

	public void setAddress(String address) {
		this.address = address;
	}

}
