package technopolis.service;

public class ServiceUserPersonalDTO {

    private Integer id;
    private String employeeId;
    private String name;
    private String position;
    private String department;
    private String agency;
    private String role;
    private String image;
    private Boolean enable;

    public ServiceUserPersonalDTO(Integer id, String employeeId, String name,
            String position, String department, String agency, String role, String image, Boolean enable) {
        this.id = id;
        this.employeeId = employeeId;
        this.name = name;
        this.position = position;
        this.department = department;
        this.agency = agency;
        this.role = role;
        this.image = image;
        this.enable = enable;
    }

    public Integer getId() {
        return id;
    }

    public String getEmployeeId() {
        return employeeId;
    }

    public String getName() {
        return name;
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

    public String getRole() {
        return role;
    }

    public String getImage() {
        return image;
    }

    public Boolean isEnable() {
        return enable;
    }

}
