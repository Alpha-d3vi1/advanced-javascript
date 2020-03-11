const students = [
    {id:21 , name :'Omar sunny'},
    {id:31 , name : 'Manna'},
    {id:41 , name : 'Moyuri'},
    {id: 71 , name :'Deepjol'}
    ];

    const names = students.map(s => s.name);
    const ids = students.map(s => s.id);
    const bigger = students.filter(s => s.id > 40);
    const bigger2 = students.find(s => s.id > 40);
    console.log(bigger);
    console.log(bigger2);
    console.log(ids);
    console.log(names);