package googledrivegdhong.domain;

import googledrivegdhong.infra.AbstractEvent;
import java.time.LocalDate;
import java.util.*;
import lombok.Data;

@Data
public class FileIndexed extends AbstractEvent {

    private Long id;
    private Long fileId;
    private List<String> keywords;
}
