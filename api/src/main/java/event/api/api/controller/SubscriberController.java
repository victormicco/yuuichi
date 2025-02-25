package event.api.api.controller;


import event.api.api.dto.SubscriberDto;
import event.api.api.service.SubscriberService;
import lombok.AllArgsConstructor;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;


@AllArgsConstructor
@RestController
@RequestMapping("/api/subscriber")
public class SubscriberController {
    private SubscriberService subscriberService;


    @PostMapping
    public ResponseEntity<SubscriberDto> createSubscriber(@RequestBody SubscriberDto subscriberDto) {
        SubscriberDto savedSubscriber = subscriberService.createSubscriber(subscriberDto);
        return new ResponseEntity<>(savedSubscriber, HttpStatus.CREATED );
    }
}
