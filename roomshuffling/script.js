const roomsContainer = document.getElementById('roomsContainer');
    const shuffleButton = document.getElementById('shuffleButton');

    const girlsNames = [
      'Priti wanjari', 'Renuka pohokar', 'Jagruti patle', 'payal dhok', 'shweta darwai', 'Shewta khadse', 'Vishakha Malewar',
       'Sakshi Badusing Wadate', 'Snehal Sunil Kanhekar', 'Rakhee Gajanan Sirsat', 'Amruta Sunil suralkar', 'Yamini Shende',
       'Sanjana Gadekar', 'Ekta Harish Adhau ', 'Kalpana Dinesh Dhage', 'Krutika Jitendra Tatte' ,'Dipa Raosaheb Raurale ',
        'Priya Ganeshrao Sadar', 'Yogeshree shende', 'Kanchan Shende', 'Laxmi Shende', 'Chanda namdev dod ', 'Dipti Anil Thakre','Shital Bharatsingh Mohare', 
       'Khushi Onkar kacchwah', 'Nikita Gajanan Masurkar ', 'Harshada Narendra Thakare', 'Janhavi Vilas Dhok ', 'Vishakha Sadanand Gudade ',
       'Vaishnavi Vinay Bhamburkar','rani panjabrao kharate', '"Vedashri kiranrao joshi', 'Shraddha Devidas Bawangade', 'Dhanashri Narayan Bilbile',
        'Vaishnavi Siddheshwar Paropate ', 'Sakshi govardhan mankar', 'pragti Madan dhawle', 'Nandani Vijay Daware ','Ashwini Prashant Khadse ', 
        'Shrutika Subhashrao Bhagwat', 'Prachi Ganesh Aghadate', 'Vishakha anand wankhade', 'Pragati Prakash Zagade', 
        'Rupali Vilasrao Nandane', 'Sapna dipak bhamdar','Rinkal kishor bahurupi','Gayatri Lileshwar kadu', 
        'Radha suresh chaudhari', 'Shital Karpate','Aishwarya Santosh Harode', 'Madhuri Santosh Gore','Dipali Nandkishor Khatade',
         'Shweta maroti khadse ', 'Anuradha ananta aswar ','Vaishali Sukhadev Morey','Manasi gajanan panchabuddhe', 'Nisha Maroti Murodiye', 
         'Yogita Bhaktpralhad Jibhakate ','"Rohini Sunil Neware','Neha Nitin Saraf', 'Kiran Vijay bramhane ', '"Samiksha Arunrao Malasane', 
         'Suchita Dayaram Bondre ','Sakshi Gajanan Paraskar', 'Janhvi Suresh Shende ', 'Amruta Sewakram Bagde', 'Chaitali Banduji Dhoke ', 
         'Swati Sanjay patil', 'jyoti kalaskar', 'Pratima Shrikrushna Akolkar','Megha tulshidas sarve','Chhamika Vilasrao kutemate '
    ];

    function shuffleArray(array) 
    {
      for (let i = array.length; i>0; i--) 
      {
        const j = Math.floor(Math.random()* (i+1));
        [array[i], array[j]] = [array[j], array[i]];
      }
    }

    function shuffleRooms() 
    {
      const shuffledNames = [...girlsNames];
      shuffleArray(shuffledNames);

      roomsContainer.innerHTML = '';

      for (let roomNumber = 1; roomNumber <= 25; roomNumber++) 
      {
        const room = document.createElement('div');
        room.className = 'room';
        room.innerHTML = `<h2>Room ${roomNumber}</h2>`;

        for (let i = 0; i < 3; i++) 
        {
          const girlIndex = (roomNumber - 1) * 3 + i;
          const girlName = shuffledNames[girlIndex];
          const p = document.createElement('p');
          p.textContent = girlName;
          room.appendChild(p);
        }

        roomsContainer.appendChild(room);
      }
    }
    shuffleButton.addEventListener('click', shuffleRooms);