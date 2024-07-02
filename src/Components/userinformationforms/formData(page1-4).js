// data.js
export const pageInformation = [
    {
      id: 1,
      title: 'Personal Information',
      message: 'Introduce yourself',
      assets: [
        {fieldName: "First Name", type:'text'},
        {fieldName: "Last Name", type:'text'},
        {fieldName: "Date of Birth", type:'date'},
        {fieldName: "Address",type:'text'},
      ],
      formData: [{firstName: '', lastName: '', dateOfBirth: '', address: ''}]
    },
    {
      id: 2,
      title: 'Login Information',
      message: 'Let us setup your login portal',
      assets: [
        {fieldName: "School Email", type:'email'},
        {fieldName: "Password", type:'password'},
        {fieldName: "Confirm Password", type:'password'},
        {fieldName: "Username (Given by school)", type:'text'},
        {fieldName: "Student ID", type:'number'}
      ],
      formData: [{schoolEmail: '', password: '', confirmPassword: '', userName: ''}]
    },
    {
      id: 3,
      title: 'Education',
      message: 'Please mention your ongoing education status',
      assets: [
        {fieldName: "Major", type:'text'},
        {fieldName: "Year in College", type:'text'},
        {fieldName: "Graduation Date",type:'date'},
        {fieldName: "Department", type:'text'}
      ],
      formData: [{major: '', yearInCollege: '', graduationDate: '', department: ''}]
    },
    {id: 4,
      title: 'Several Profiles Link',
      message: 'Let us know you more!',
      assets: [
        {fieldName: "LinkedIn Profile", type:'url'},
        {fieldName: "Portfolio (if any)",type:'url'},
        {fieldName: "GitHub Link (encouraged for informatics majors) ", type:'url'},
        {fieldName: "Your Personal Project (if deployed)", type:'url'}
      ],
      formData: [{githubLink: '',linkedInProfile : '', portfolio: '', yourPersonalProject: ''}]
    }
  ];
  