package event.api.api.service.impl;

import event.api.api.dto.SubscriberDto;
import event.api.api.entity.Subscriber;
import event.api.api.mapper.SubscriberMapper;
import event.api.api.repository.SubscriberRepository;
import event.api.api.service.SubscriberService;
import lombok.AllArgsConstructor;
import org.springframework.stereotype.Service;

@Service
@AllArgsConstructor
public class SubscriberServiceImpl implements SubscriberService {

    private SubscriberRepository subscriberRepository;

    @Override
    public SubscriberDto createSubscriber(SubscriberDto subscriberDto) {
        Subscriber subscriber = SubscriberMapper.mapToSubscriber(subscriberDto);
        Subscriber savedSubscriber = subscriberRepository.save(subscriber);

        return SubscriberMapper.mapToSubscriberDto(savedSubscriber);
    }
}
