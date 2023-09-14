package technopolis.service;

public class ServiceUserPersonalDTO {

    private Integer id;
    private String employeeId;
    private String gender;
    private String firstName;
    private String lastName;
    private String position;
    private String department;
    private String agency;
    private String image;

    public ServiceUserPersonalDTO(Integer id, String employeeId, String gender, String firstName, String lastName,
            String position, String department, String agency, String image) {
        this.id = id;
        this.employeeId = employeeId;
        this.gender = gender;
        this.firstName = firstName;
        this.lastName = lastName;
        this.position = position;
        this.department = department;
        this.agency = agency;
        this.image = image;
    }

    public Integer getId() {
        return id;
    }

    public String getEmployeeId() {
        return employeeId;
    }

    public String getGender() {
        return gender;
    }

    public String getFirstName() {
        return firstName;
    }

    public String getLastName() {
        return lastName;
    }

    public String getPosition() {
        return position;
    }

    public String getDepartment() {
        return department;
    }

    public String getAgency() {
        return agency;
    }

    public String getImage() {
        return image;
    }
}
