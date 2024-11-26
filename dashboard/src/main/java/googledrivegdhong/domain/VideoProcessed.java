package googledrivegdhong.domain;

import googledrivegdhong.infra.AbstractEvent;
import java.time.LocalDate;
import java.util.*;
import lombok.Data;

@Data
public class VideoProcessed extends AbstractEvent {

    private Long id;
    private String fileId;
    private String url;
}
