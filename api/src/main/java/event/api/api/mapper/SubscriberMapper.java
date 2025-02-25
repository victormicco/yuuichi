package event.api.api.mapper;

import event.api.api.dto.SubscriberDto;
import event.api.api.entity.Subscriber;

public class SubscriberMapper {
    public static SubscriberDto mapToSubscriberDto(Subscriber subscriber) {
        return new SubscriberDto(
                subscriber.getId(),
                subscriber.getFullName(),
                subscriber.getEmail(),
                subscriber.getCreatedAt()
        );
    }

    public static Subscriber mapToSubscriber(SubscriberDto subscriberDto) {
        return new Subscriber(
                subscriberDto.getId(),
                subscriberDto.getFullName(),
                subscriberDto.getEmail(),
                subscriberDto.getCreatedAt()
        );
    }
}
