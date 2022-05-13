var empName = "Jaya";
var jobRole = "Doctor";

switch(jobRole.toLocaleLowerCase()) {
    case 'teacher':
        console.log(empName+ 'is a Teacher');
        break;
        case 'doctor':
            console.log(empName+ 'is a Doctor');
            break;
            case 'engineer':
                console.log(empName+ 'is a Engineer');
                break;
                default:
                    console.log(empName+ 'something else');
                    break;

}