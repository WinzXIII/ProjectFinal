package technopolis.Employee;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@Builder
@AllArgsConstructor
@NoArgsConstructor
public class EmployeeDTO {

    private Integer id;
    private String empNumber;
    private String name;
    private String position;
    private String department;
    private String agency;
    private String image;
    private String role;

}
