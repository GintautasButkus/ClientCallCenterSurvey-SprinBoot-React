package lt.vtmc.GintautasButkus.CallCenter.Exception;

import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.ResponseStatus;

@ResponseStatus(HttpStatus.NO_CONTENT)
public class ClientAlreadyExistsException extends IllegalArgumentException {

	/**
	 * 
	 */
	private static final long serialVersionUID = 1L;

	public ClientAlreadyExistsException(String message) {
		super(message);
	}
}
