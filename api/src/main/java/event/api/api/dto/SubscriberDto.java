package event.api.api.dto;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import java.time.LocalDateTime;


@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
public class SubscriberDto {
    private Long id;
    private String fullName;
    private String email;
    private LocalDateTime createdAt;

}
