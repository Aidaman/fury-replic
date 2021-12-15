export interface IArdesses{
    index: number;
    checkBoxStatus: boolean;
    starred: boolean;
    isIncoming: boolean;
    image: string;
    fullname: string;
    when: string;
    shorterText: string;
    fulltext: string;
    viewValue: string;
  }
  
  export interface ISection{
    index: number;
    isDivider: boolean;
    iconID: string;
    text: string;
    viewValue: string;
    chats: IArdesses[];
  }
  
  function getShorterString(text: string) {
    let tempFull: string = text,
    returnValue!: string;
    for (let i = 0; i < (80 > tempFull.length? tempFull.length : 80); i++) {
      returnValue += tempFull[i];
    }
    return returnValue;
  }
  
  const Primary : IArdesses[] = [
    {
      index: 1,
      checkBoxStatus: false,
      starred: false,
      isIncoming: true,
      image: "../../../assets/Users/UserAvatar.jpg",
      fullname: "Jotaro Kujo",
      when: "Now",
      shorterText: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eius, fugiat!",
      fulltext: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eius, fugiat!",
      viewValue: '',
    },
    {
      index: 2,
      checkBoxStatus: false,
      starred: false,
      isIncoming: false,
      image: "../../../assets/Users/User1.jpg",
      fullname: "Kakyoin Noriaki",
      when: "1 hour ago",
      shorterText: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eius, fugiat!",
      fulltext: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eius, fugiat!",
      viewValue: '',
    },
    {
      index: 3,
      checkBoxStatus: false,
      starred: false,
      isIncoming: true,
      image: "../../../assets/Users/User2.jpg",
      fullname: "Joseph Joestar",
      when: "5 hours ago",
      shorterText: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eius, fugiat!",
      fulltext: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eius, fugiat!",
      viewValue: '',
    },
    {
      index: 4,
      checkBoxStatus: false,
      starred: false,
      isIncoming: false,
      image: "../../../assets/Users/User3.jpg",
      fullname: "Giorno Giovanna",
      when: "yesterday 8:30",
      shorterText: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eius, fugiat!",
      fulltext: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eius, fugiat!",
      viewValue: '',
    },
    {
      index: 5,
      checkBoxStatus: false,
      starred: false,
      isIncoming: true,
      image: "../../../assets/Users/User4.jpg",
      fullname: "Bruno Bucciarati",
      when: "yesterday 6:00",
      shorterText: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eius, fugiat!",
      fulltext: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eius, fugiat!",
      viewValue: '',
    },
    {
      index: 6,
      checkBoxStatus: false,
      starred: false,
      isIncoming: false,
      image: "../../../assets/Users/User5.jpg",
      fullname: "Speedwagon",
      when: "2 days ago 18:00",
      shorterText: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eius, fugiat!",
      fulltext: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eius, fugiat!",
      viewValue: '',
    },
    {
      index: 7,
      checkBoxStatus: false,
      starred: false,
      isIncoming: true,
      image: "../../../assets/Users/User6.jpg",
      fullname: "Dio Brando",
      when: "2 days ago 23:55",
      shorterText: "Lorem ips um dolor sit amet, consectetur adipisicing elit. Eius, fugiat!",
      fulltext: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eius, fugiat!",
      viewValue: '',
    },
    {
      index: 8,
      checkBoxStatus: false,
      starred: false,
      isIncoming: true,
      image: "../../../assets/Users/User7.jpg",
      fullname: "Higashikata Josuke",
      when: "3 days ago 15:23",
      shorterText: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eius, fugiat!",
      fulltext: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eius, fugiat!",
      viewValue: '',
    },
    {
      index: 9,
      checkBoxStatus: false,
      starred: false,
      isIncoming: false,
      image: "../../../assets/Users/User8.jpg",
      fullname: "Nijimura Okuyasu",
      when: "3 days ago 5:43",
      shorterText: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eius, fugiat!",
      fulltext: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eius, fugiat!",
      viewValue: '',
    },
  ]
  const Sociall : IArdesses[] = [
    {
      index: 1,
      checkBoxStatus: false,
      starred: true,
      isIncoming: true,
      image: "../../../assets/Users/UserAvatar.jpg",
      fullname: "Jotaro Kujo",
      when: "Now",
      shorterText: "Yare Yare Daze",
      fulltext: "ORA! ORA! ORA! ORA! ORA! ORA! ORA! ORA! ORA! ORA! ORA! ORA! ORA! ORA! ORA! ORA! ORA! ORA! ORA! ORA! ORA! ORA! ORA! ORA! ORA! ORA! ORA! ORA! ORA! ORA! ORA! ORA! ORA! ORA! ORA! ORA! ORA! ORA! ORA! ORA! ORA! ORA! ORA! ORA! ORA! ORA! ORA! ORA! ORA! ORA! ORA! ORA! ORA! ORA! ORA! ORA! ORA! ORA! ORA! ",
      viewValue: '',
    },
    {
      index: 2,
      checkBoxStatus: false,
      starred: false,
      isIncoming: true,
      image: "../../../assets/Users/User3.jpg",
      fullname: "Giorno Giovanna",
      when: "30 min-s ago",
      shorterText: "I have a dream!",
      fulltext: "My name is Giovanni Giorgio, but my friends call me simply Giorgio",
      viewValue: '',
    },
    {
      index: 3,
      checkBoxStatus: false,
      starred: true,
      isIncoming: false,
      image: "../../../assets/Users/User1.jpg",
      fullname: "Nokyoin Kariaki",
      when: "30 min-s ago",
      shorterText: "Hierophant Green! EMERALD SPLASH!",
      fulltext: "rero rero rero rero rero rero rero rero rero rero rero rero rero rero rero rero rero rero rero rero rero rero rero rero rero rero rero rero rero rero rero rero rero rero rero rero rero rero rero rero rero rero rero rero rero rero rero rero rero ",
      viewValue: '',
    },
    {
      index: 4,
      checkBoxStatus: false,
      starred: false,
      isIncoming: false,
      image: "../../../assets/Users/User8.jpg",
      fullname: "Nijimura Ohuyasu",
      when: "a hour ago",
      shorterText: "I'm stupid",
      fulltext: "How I knew who of you is a Stand User? I was about to smash you both because i'm stupid",
      viewValue: '',
    },
    {
      index: 5,
      checkBoxStatus: false,
      starred: true,
      isIncoming: false,
      image: "../../../assets/Users/User8.jpg",
      fullname: "Nijimura Ohuyasu",
      when: "2 hours ago",
      shorterText: "My stand",
      fulltext: "The Hand, 'cuts' out or 'scrapes away' space and replaces it with redistributed neighbouring space, or simply eradicates it",
      viewValue: '',
    },
    {
      index: 5,
      checkBoxStatus: false,
      starred: false,
      isIncoming: true,
      image: "../../../assets/Users/User14.jpg",
      fullname: "Nijimura Ohuyasu",
      when: "5 hours ago",
      shorterText: "YOU STUPID",
      fulltext: "DU TEEERICH DIE MAN. DI DEUTSCHE WESENSCHAFT IST DIE BEST IN DIE WERLD",
      viewValue: '',
    },
  ]
  const Promotion : IArdesses[] = [
    {
      index: 1,
      checkBoxStatus: false,
      starred: true,
      isIncoming: false,
      image: "../../../assets/Users/User4.jpg",
      fullname: "Bruno Bucciarati",
      when: "a mounth ago",
      shorterText: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Sit aut ratione incidunt ipsa?",
      fulltext: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Officia debitis aliquid in asperiores a harum nemo, sint cupiditate perspiciatis voluptatum molestias dolore ipsum illo quos exercitationem totam fuga repudiandae ullam, saepe pariatur! Rem obcaecati fugiat quia aspernatur at voluptatibus aliquid.",
      viewValue: '',
    },
    {
      index: 2,
      checkBoxStatus: false,
      starred: true,
      isIncoming: false,
      image: "../../../assets/Users/User4.jpg",
      fullname: "Bruno Bucciarati",
      when: "2 mounths ago",
      shorterText: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Sit aut ratione incidunt ipsa?",
      fulltext: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Officia debitis aliquid in asperiores a harum nemo, sint cupiditate perspiciatis voluptatum molestias dolore ipsum illo quos exercitationem totam fuga repudiandae ullam, saepe pariatur! Rem obcaecati fugiat quia aspernatur at voluptatibus aliquid.",
      viewValue: '',
    },
    {
      index: 3,
      checkBoxStatus: false,
      starred: true,
      isIncoming: false,
      image: "../../../assets/Users/User3.jpg",
      fullname: "Giorno Giovanna",
      when: "3 mounth ago",
      shorterText: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Sit aut ratione incidunt ipsa?",
      fulltext: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Officia debitis aliquid in asperiores a harum nemo, sint cupiditate perspiciatis voluptatum molestias dolore ipsum illo quos exercitationem totam fuga repudiandae ullam, saepe pariatur! Rem obcaecati fugiat quia aspernatur at voluptatibus aliquid.",
      viewValue: '',
    },
    {
      index: 4,
      checkBoxStatus: false,
      starred: true,
      isIncoming: false,
      image: "../../../assets/Users/User9.jpg",
      fullname: "Hirose Koichi",
      when: "6 mounths ago",
      shorterText: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Sit aut ratione incidunt ipsa?",
      fulltext: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Officia debitis aliquid in asperiores a harum nemo, sint cupiditate perspiciatis voluptatum molestias dolore ipsum illo quos exercitationem totam fuga repudiandae ullam, saepe pariatur! Rem obcaecati fugiat quia aspernatur at voluptatibus aliquid.",
      viewValue: '',
    },
    {
      index: 5,
      checkBoxStatus: false,
      starred: true,
      isIncoming: false,
      image: "../../../assets/Users/User12.jpg",
      fullname: "Enrico Pucci",
      when: "a year ago",
      shorterText: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Sit aut ratione incidunt ipsa?",
      fulltext: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Officia debitis aliquid in asperiores a harum nemo, sint cupiditate perspiciatis voluptatum molestias dolore ipsum illo quos exercitationem totam fuga repudiandae ullam, saepe pariatur! Rem obcaecati fugiat quia aspernatur at voluptatibus aliquid.",
      viewValue: '',
    },
    {
      index: 6,
      checkBoxStatus: false,
      starred: false,
      isIncoming: false,
      image: "../../../assets/Users/User4.jpg",
      fullname: "Bruno Bucciarati",
      when: "1y 3 mounth ago",
      shorterText: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Sit aut ratione incidunt ipsa?",
      fulltext: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Officia debitis aliquid in asperiores a harum nemo, sint cupiditate perspiciatis voluptatum molestias dolore ipsum illo quos exercitationem totam fuga repudiandae ullam, saepe pariatur! Rem obcaecati fugiat quia aspernatur at voluptatibus aliquid.",
      viewValue: '',
    },
    {
      index: 7,
      checkBoxStatus: false,
      starred: false,
      isIncoming: false,
      image: "../../../assets/Users/User4.jpg",
      fullname: "Bruno Bucciarati",
      when: "1y 5 mounth ago",
      shorterText: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Sit aut ratione incidunt ipsa?",
      fulltext: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Officia debitis aliquid in asperiores a harum nemo, sint cupiditate perspiciatis voluptatum molestias dolore ipsum illo quos exercitationem totam fuga repudiandae ullam, saepe pariatur! Rem obcaecati fugiat quia aspernatur at voluptatibus aliquid.",
      viewValue: '',
    },
    {
      index: 8,
      checkBoxStatus: false,
      starred: false,
      isIncoming: false,
      image: "../../../assets/Users/User7.jpg",
      fullname: "Higashikata Josuke",
      when: "2 years ago",
      shorterText: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Sit aut ratione incidunt ipsa?",
      fulltext: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Officia debitis aliquid in asperiores a harum nemo, sint cupiditate perspiciatis voluptatum molestias dolore ipsum illo quos exercitationem totam fuga repudiandae ullam, saepe pariatur! Rem obcaecati fugiat quia aspernatur at voluptatibus aliquid.",
      viewValue: '',
    },
    {
      index: 9,
      checkBoxStatus: false,
      starred: false,
      isIncoming: false,
      image: "../../../assets/Users/User4.jpg",
      fullname: "Bruno Bucciarati",
      when: "3 years ago",
      shorterText: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Sit aut ratione incidunt ipsa?",
      fulltext: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Officia debitis aliquid in asperiores a harum nemo, sint cupiditate perspiciatis voluptatum molestias dolore ipsum illo quos exercitationem totam fuga repudiandae ullam, saepe pariatur! Rem obcaecati fugiat quia aspernatur at voluptatibus aliquid.",
      viewValue: '',
    },
    {
      index: 10,
      checkBoxStatus: false,
      starred: true,
      isIncoming: false,
      image: "../../../assets/Users/User14.jpg",
      fullname: "Rudolf von Stroheim",
      when: "6 years ago",
      shorterText: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Sit aut ratione incidunt ipsa?",
      fulltext: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Officia debitis aliquid in asperiores a harum nemo, sint cupiditate perspiciatis voluptatum molestias dolore ipsum illo quos exercitationem totam fuga repudiandae ullam, saepe pariatur! Rem obcaecati fugiat quia aspernatur at voluptatibus aliquid.",
      viewValue: '',
    },
    {
      index: 11,
      checkBoxStatus: false,
      starred: false,
      isIncoming: false,
      image: "../../../assets/Users/UserAvatar.jpg",
      fullname: "Joparo Kujo",
      when: "3 years ago",
      shorterText: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Sit aut ratione incidunt ipsa?",
      fulltext: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Officia debitis aliquid in asperiores a harum nemo, sint cupiditate perspiciatis voluptatum molestias dolore ipsum illo quos exercitationem totam fuga repudiandae ullam, saepe pariatur! Rem obcaecati fugiat quia aspernatur at voluptatibus aliquid.",
      viewValue: '',
    },
    {
      index: 12,
      checkBoxStatus: false,
      starred: true,
      isIncoming: false,
      image: "../../../assets/Users/User4.jpg",
      fullname: "Bruno Bucciarati",
      when: "6 years ago",
      shorterText: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Sit aut ratione incidunt ipsa?",
      fulltext: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Officia debitis aliquid in asperiores a harum nemo, sint cupiditate perspiciatis voluptatum molestias dolore ipsum illo quos exercitationem totam fuga repudiandae ullam, saepe pariatur! Rem obcaecati fugiat quia aspernatur at voluptatibus aliquid.",
      viewValue: '',
    },
  ]
  const Starred : IArdesses[] = [
    {
      index: 1,
      checkBoxStatus: false,
      starred: true,
      isIncoming: true,
      image: "../../../assets/Users/UserAvatar.jpg",
      fullname: "Jotaro Kujo",
      when: "Now",
      shorterText: "Yare Yare Daze",
      fulltext: "ORA! ORA! ORA! ORA! ORA! ORA! ORA! ORA! ORA! ORA! ORA! ORA! ORA! ORA! ORA! ORA! ORA! ORA! ORA! ORA! ORA! ORA! ORA! ORA! ORA! ORA! ORA! ORA! ORA! ORA! ORA! ORA! ORA! ORA! ORA! ORA! ORA! ORA! ORA! ORA! ORA! ORA! ORA! ORA! ORA! ORA! ORA! ORA! ORA! ORA! ORA! ORA! ORA! ORA! ORA! ORA! ORA! ORA! ORA! ",
      viewValue: '',
    },
    {
      index: 2,
      checkBoxStatus: false,
      starred: true,
      isIncoming: false,
      image: "../../../assets/Users/User1.jpg",
      fullname: "Nokyoin Kariaki",
      when: "30 min-s ago",
      shorterText: "Hierophant Green! EMERALD SPLASH!",
      fulltext: "rero rero rero rero rero rero rero rero rero rero rero rero rero rero rero rero rero rero rero rero rero rero rero rero rero rero rero rero rero rero rero rero rero rero rero rero rero rero rero rero rero rero rero rero rero rero rero rero rero ",
      viewValue: '',
    },
    {
      index: 3,
      checkBoxStatus: false,
      starred: true,
      isIncoming: false,
      image: "../../../assets/Users/User8.jpg",
      fullname: "Nijimura Ohuyasu",
      when: "2 hours ago",
      shorterText: "My stand",
      fulltext: "The Hand, 'cuts' out or 'scrapes away' space and replaces it with redistributed neighbouring space, or simply eradicates it",
      viewValue: '',
    },
    {
      index: 4,
      checkBoxStatus: false,
      starred: true,
      isIncoming: false,
      image: "../../../assets/Users/User4.jpg",
      fullname: "Bruno Bucciarati",
      when: "a mounth ago",
      shorterText: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Sit aut ratione incidunt ipsa?",
      fulltext: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Officia debitis aliquid in asperiores a harum nemo, sint cupiditate perspiciatis voluptatum molestias dolore ipsum illo quos exercitationem totam fuga repudiandae ullam, saepe pariatur! Rem obcaecati fugiat quia aspernatur at voluptatibus aliquid.",
      viewValue: '',
    },
    {
      index: 5,
      checkBoxStatus: false,
      starred: true,
      isIncoming: false,
      image: "../../../assets/Users/User4.jpg",
      fullname: "Bruno Bucciarati",
      when: "2 mounths ago",
      shorterText: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Sit aut ratione incidunt ipsa?",
      fulltext: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Officia debitis aliquid in asperiores a harum nemo, sint cupiditate perspiciatis voluptatum molestias dolore ipsum illo quos exercitationem totam fuga repudiandae ullam, saepe pariatur! Rem obcaecati fugiat quia aspernatur at voluptatibus aliquid.",
      viewValue: '',
    },
    {
      index: 6,
      checkBoxStatus: false,
      starred: true,
      isIncoming: false,
      image: "../../../assets/Users/User3.jpg",
      fullname: "Giorno Giovanna",
      when: "3 mounth ago",
      shorterText: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Sit aut ratione incidunt ipsa?",
      fulltext: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Officia debitis aliquid in asperiores a harum nemo, sint cupiditate perspiciatis voluptatum molestias dolore ipsum illo quos exercitationem totam fuga repudiandae ullam, saepe pariatur! Rem obcaecati fugiat quia aspernatur at voluptatibus aliquid.",
      viewValue: '',
    },
    {
      index: 7,
      checkBoxStatus: false,
      starred: true,
      isIncoming: false,
      image: "../../../assets/Users/User9.jpg",
      fullname: "Hirose Koichi",
      when: "6 mounths ago",
      shorterText: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Sit aut ratione incidunt ipsa?",
      fulltext: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Officia debitis aliquid in asperiores a harum nemo, sint cupiditate perspiciatis voluptatum molestias dolore ipsum illo quos exercitationem totam fuga repudiandae ullam, saepe pariatur! Rem obcaecati fugiat quia aspernatur at voluptatibus aliquid.",
      viewValue: '',
    },
    {
      index: 8,
      checkBoxStatus: false,
      starred: true,
      isIncoming: false,
      image: "../../../assets/Users/User12.jpg",
      fullname: "Enrico Pucci",
      when: "a year ago",
      shorterText: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Sit aut ratione incidunt ipsa?",
      fulltext: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Officia debitis aliquid in asperiores a harum nemo, sint cupiditate perspiciatis voluptatum molestias dolore ipsum illo quos exercitationem totam fuga repudiandae ullam, saepe pariatur! Rem obcaecati fugiat quia aspernatur at voluptatibus aliquid.",
      viewValue: '',
    },
    {
      index: 9,
      checkBoxStatus: false,
      starred: true,
      isIncoming: false,
      image: "../../../assets/Users/User14.jpg",
      fullname: "Rudolf von Stroheim",
      when: "6 years ago",
      shorterText: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Sit aut ratione incidunt ipsa?",
      fulltext: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Officia debitis aliquid in asperiores a harum nemo, sint cupiditate perspiciatis voluptatum molestias dolore ipsum illo quos exercitationem totam fuga repudiandae ullam, saepe pariatur! Rem obcaecati fugiat quia aspernatur at voluptatibus aliquid.",
      viewValue: '',
    },
    {
      index: 10,
      checkBoxStatus: false,
      starred: true,
      isIncoming: false,
      image: "../../../assets/Users/User4.jpg",
      fullname: "Bruno Bucciarati",
      when: "6 years ago",
      shorterText: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Sit aut ratione incidunt ipsa?",
      fulltext: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Officia debitis aliquid in asperiores a harum nemo, sint cupiditate perspiciatis voluptatum molestias dolore ipsum illo quos exercitationem totam fuga repudiandae ullam, saepe pariatur! Rem obcaecati fugiat quia aspernatur at voluptatibus aliquid.",
      viewValue: '',
    },
    {
      index: 11,
      checkBoxStatus: false,
      starred: true,
      isIncoming: true,
      image: "../../../assets/Users/UserAvatar.jpg",
      fullname: "Jotaro Kujo",
      when: "10 years ago",
      shorterText: "Yare Yare Daze",
      fulltext: "Ora :(",
      viewValue: '',
    },
    {
      index: 12,
      checkBoxStatus: false,
      starred: true,
      isIncoming: true,
      image: "../../../assets/Users/User1.jpg",
      fullname: "Kakyoin Noriaki",
      when: "1 year ago",
      shorterText: "Yare Yare Daze",
      fulltext: "Ora :(",
      viewValue: '',
    },
    {
      index: 13,
      checkBoxStatus: false,
      starred: true,
      isIncoming: true,
      image: "../../../assets/Users/User2.jpg",
      fullname: "Joseph Joestar",
      when: "6 months ago",
      shorterText: "Yare Yare Daze",
      fulltext: "Ora :(",
      viewValue: '',
    },
    {
      index: 14,
      checkBoxStatus: false,
      starred: true,
      isIncoming: true,
      image: "../../../assets/Users/User11.jpg",
      fullname: "Jolyne Kujo",
      when: "10 years ago",
      shorterText: "Yare Yare Daze",
      fulltext: "Ora :(",
      viewValue: '',
    },
  ];
  const Incoming : IArdesses[] = [
    {
      index: 1,
      checkBoxStatus: false,
      starred: true,
      isIncoming: false,
      image: "../../../assets/Users/User8.jpg",
      fullname: "Nijimura Ohuyasu",
      when: "2 hours ago",
      shorterText: "My stand",
      fulltext: "The Hand, 'cuts' out or 'scrapes away' space and replaces it with redistributed neighbouring space, or simply eradicates it",
      viewValue: '',
    },
  {
      index: 2,
      checkBoxStatus: false,
      starred: false,
      isIncoming: true,
      image: "../../../assets/Users/User2.jpg",
      fullname: "Joseph Joestar",
      when: "5 hours ago",
      shorterText: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eius, fugiat!",
      fulltext: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eius, fugiat!",
      viewValue: '',
    },
  {
      index: 3,
      checkBoxStatus: false,
      starred: false,
      isIncoming: true,
      image: "../../../assets/Users/User4.jpg",
      fullname: "Bruno Bucciarati",
      when: "yesterday 6:00",
      shorterText: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eius, fugiat!",
      fulltext: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eius, fugiat!",
      viewValue: '',
    },
  {
      index: 4,
      checkBoxStatus: false,
      starred: false,
      isIncoming: true,
      image: "../../../assets/Users/User6.jpg",
      fullname: "Dio Brando",
      when: "2 days ago 23:55",
      shorterText: "Lorem ips um dolor sit amet, consectetur adipisicing elit. Eius, fugiat!",
      fulltext: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eius, fugiat!",
      viewValue: '',
    },
  {
      index: 5,
      checkBoxStatus: false,
      starred: false,
      isIncoming: true,
      image: "../../../assets/Users/User7.jpg",
      fullname: "Higashikata Josuke",
      when: "3 days ago 15:23",
      shorterText: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eius, fugiat!",
      fulltext: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eius, fugiat!",
      viewValue: '',
    },
  {
      index: 6,
      checkBoxStatus: false,
      starred: true,
      isIncoming: true,
      image: "../../../assets/Users/UserAvatar.jpg",
      fullname: "Jotaro Kujo",
      when: "Now",
      shorterText: "Yare Yare Daze",
      fulltext: "ORA! ORA! ORA! ORA! ORA! ORA! ORA! ORA! ORA! ORA! ORA! ORA! ORA! ORA! ORA! ORA! ORA! ORA! ORA! ORA! ORA! ORA! ORA! ORA! ORA! ORA! ORA! ORA! ORA! ORA! ORA! ORA! ORA! ORA! ORA! ORA! ORA! ORA! ORA! ORA! ORA! ORA! ORA! ORA! ORA! ORA! ORA! ORA! ORA! ORA! ORA! ORA! ORA! ORA! ORA! ORA! ORA! ORA! ORA! ",
      viewValue: '',
    },
    {
      index: 7,
      checkBoxStatus: false,
      starred: false,
      isIncoming: true,
      image: "../../../assets/Users/User3.jpg",
      fullname: "Giorno Giovanna",
      when: "30 min-s ago",
      shorterText: "I have a dream!",
      fulltext: "My name is Giovanni Giorgio, but my friends call me simply Giorgio",
      viewValue: '',
    },
  {
      index: 8,
      checkBoxStatus: false,
      starred: false,
      isIncoming: true,
      image: "../../../assets/Users/User14.jpg",
      fullname: "Nijimura Ohuyasu",
      when: "5 hours ago",
      shorterText: "YOU STUPID",
      fulltext: "DU TEEERICH DIE MAN. DI DEUTSCHE WESENSCHAFT IST DIE BEST IN DIE WERLD",
      viewValue: '',
    },
  {
      index: 9,
      checkBoxStatus: false,
      starred: true,
      isIncoming: true,
      image: "../../../assets/Users/UserAvatar.jpg",
      fullname: "Jotaro Kujo",
      when: "10 years ago",
      shorterText: "Yare Yare Daze",
      fulltext: "Ora :(",
      viewValue: '',
    },
    {
      index: 10,
      checkBoxStatus: false,
      starred: true,
      isIncoming: true,
      image: "../../../assets/Users/User1.jpg",
      fullname: "Kakyoin Noriaki",
      when: "1 year ago",
      shorterText: "Yare Yare Daze",
      fulltext: "Ora :(",
      viewValue: '',
    },
    {
      index: 11,
      checkBoxStatus: false,
      starred: true,
      isIncoming: true,
      image: "../../../assets/Users/User2.jpg",
      fullname: "Joseph Joestar",
      when: "6 months ago",
      shorterText: "Yare Yare Daze",
      fulltext: "Ora :(",
      viewValue: '',
    },
    {
      index: 12,
      checkBoxStatus: false,
      starred: true,
      isIncoming: true,
      image: "../../../assets/Users/User11.jpg",
      fullname: "Jolyne Kujo",
      when: "10 years ago",
      shorterText: "Yare Yare Daze",
      fulltext: "Ora :(",
      viewValue: '',
    },
  ]
  const Drafts : IArdesses[] = [
    {
      index: 1,
      checkBoxStatus: false,
      starred: true,
      isIncoming: true,
      image: "../../../assets/Users/UserAvatar.jpg",
      fullname: "Jotaro Kujo",
      when: "10 years ago",
      shorterText: "Yare Yare Daze",
      fulltext: "Ora :(",
      viewValue: '',
    },
    {
      index: 2,
      checkBoxStatus: false,
      starred: true,
      isIncoming: true,
      image: "../../../assets/Users/User1.jpg",
      fullname: "Kakyoin Noriaki",
      when: "1 year ago",
      shorterText: "Yare Yare Daze",
      fulltext: "Ora :(",
      viewValue: '',
    },
    {
      index: 3,
      checkBoxStatus: false,
      starred: true,
      isIncoming: true,
      image: "../../../assets/Users/User2.jpg",
      fullname: "Joseph Joestar",
      when: "6 months ago",
      shorterText: "Yare Yare Daze",
      fulltext: "Ora :(",
      viewValue: '',
    },
    {
      index: 4,
      checkBoxStatus: false,
      starred: true,
      isIncoming: true,
      image: "../../../assets/Users/User11.jpg",
      fullname: "Jolyne Kujo",
      when: "10 years ago",
      shorterText: "Yare Yare Daze",
      fulltext: "Ora :(",
      viewValue: '',
    },
  ]
  const Spam : IArdesses[] = [
    {
      index: 1,
      checkBoxStatus: false,
      starred: false,
      isIncoming: false,
      image: "../../../assets/Users/User6.jpg",
      fullname: "DIO brando",
      when: "yesterday",
      shorterText: "HO-HO",
      fulltext: "Muda Muda Muda Muda Muda Muda Muda Muda Muda Muda Muda Muda Muda Muda Muda Muda Muda Muda Muda Muda Muda Muda Muda Muda Muda Muda Muda Muda ",
      viewValue: '',
    },
    {
      index: 2,
      checkBoxStatus: false,
      starred: false,
      isIncoming: false,
      image: "../../../assets/Users/User6.jpg",
      fullname: "DIO brando",
      when: "yesterday",
      shorterText: "HO-HO",
      fulltext: "Muda Muda Muda Muda Muda Muda Muda Muda Muda Muda Muda Muda Muda Muda Muda Muda Muda Muda Muda Muda Muda Muda Muda Muda Muda Muda Muda Muda ",
      viewValue: '',
    },
    {
      index: 3,
      checkBoxStatus: false,
      starred: false,
      isIncoming: false,
      image: "../../../assets/Users/User6.jpg",
      fullname: "DIO brando",
      when: "yesterday",
      shorterText: "HO-HO",
      fulltext: "Muda Muda Muda Muda Muda Muda Muda Muda Muda Muda Muda Muda Muda Muda Muda Muda Muda Muda Muda Muda Muda Muda Muda Muda Muda Muda Muda Muda ",
      viewValue: '',
    },
    {
      index: 4,
      checkBoxStatus: false,
      starred: false,
      isIncoming: false,
      image: "../../../assets/Users/User6.jpg",
      fullname: "DIO brando",
      when: "yesterday",
      shorterText: "HO-HO",
      fulltext: "Muda Muda Muda Muda Muda Muda Muda Muda Muda Muda Muda Muda Muda Muda Muda Muda Muda Muda Muda Muda Muda Muda Muda Muda Muda Muda Muda Muda ",
      viewValue: '',
    },
    {
      index: 5,
      checkBoxStatus: false,
      starred: false,
      isIncoming: false,
      image: "../../../assets/Users/User6.jpg",
      fullname: "DIO brando",
      when: "yesterday",
      shorterText: "HO-HO",
      fulltext: "Muda Muda Muda Muda Muda Muda Muda Muda Muda Muda Muda Muda Muda Muda Muda Muda Muda Muda Muda Muda Muda Muda Muda Muda Muda Muda Muda Muda ",
      viewValue: '',
    },
    {
      index: 6,
      checkBoxStatus: false,
      starred: false,
      isIncoming: false,
      image: "../../../assets/Users/User6.jpg",
      fullname: "DIO brando",
      when: "yesterday",
      shorterText: "HO-HO",
      fulltext: "Muda Muda Muda Muda Muda Muda Muda Muda Muda Muda Muda Muda Muda Muda Muda Muda Muda Muda Muda Muda Muda Muda Muda Muda Muda Muda Muda Muda ",
      viewValue: '',
    },
    {
      index: 7,
      checkBoxStatus: false,
      starred: false,
      isIncoming: false,
      image: "../../../assets/Users/User6.jpg",
      fullname: "DIO brando",
      when: "yesterday",
      shorterText: "HO-HO",
      fulltext: "Muda Muda Muda Muda Muda Muda Muda Muda Muda Muda Muda Muda Muda Muda Muda Muda Muda Muda Muda Muda Muda Muda Muda Muda Muda Muda Muda Muda ",
      viewValue: '',
    },
    {
      index: 8,
      checkBoxStatus: false,
      starred: false,
      isIncoming: false,
      image: "../../../assets/Users/User6.jpg",
      fullname: "DIO brando",
      when: "yesterday",
      shorterText: "HO-HO",
      fulltext: "Muda Muda Muda Muda Muda Muda Muda Muda Muda Muda Muda Muda Muda Muda Muda Muda Muda Muda Muda Muda Muda Muda Muda Muda Muda Muda Muda Muda ",
      viewValue: '',
    },
    {
      index: 9,
      checkBoxStatus: false,
      starred: false,
      isIncoming: false,
      image: "../../../assets/Users/User6.jpg",
      fullname: "DIO brando",
      when: "yesterday",
      shorterText: "HO-HO",
      fulltext: "Muda Muda Muda Muda Muda Muda Muda Muda Muda Muda Muda Muda Muda Muda Muda Muda Muda Muda Muda Muda Muda Muda Muda Muda Muda Muda Muda Muda ",
      viewValue: '',
    },
    {
      index: 10,
      checkBoxStatus: false,
      starred: false,
      isIncoming: false,
      image: "../../../assets/Users/User6.jpg",
      fullname: "DIO brando",
      when: "yesterday",
      shorterText: "HO-HO",
      fulltext: "Muda Muda Muda Muda Muda Muda Muda Muda Muda Muda Muda Muda Muda Muda Muda Muda Muda Muda Muda Muda Muda Muda Muda Muda Muda Muda Muda Muda ",
      viewValue: '',
    },
    {
      index: 11,
      checkBoxStatus: false,
      starred: false,
      isIncoming: false,
      image: "../../../assets/Users/User6.jpg",
      fullname: "DIO brando",
      when: "yesterday",
      shorterText: "HO-HO",
      fulltext: "Muda Muda Muda Muda Muda Muda Muda Muda Muda Muda Muda Muda Muda Muda Muda Muda Muda Muda Muda Muda Muda Muda Muda Muda Muda Muda Muda Muda ",
      viewValue: '',
    },
    {
      index: 12,
      checkBoxStatus: false,
      starred: false,
      isIncoming: false,
      image: "../../../assets/Users/User6.jpg",
      fullname: "DIO brando",
      when: "yesterday",
      shorterText: "HO-HO",
      fulltext: "Muda Muda Muda Muda Muda Muda Muda Muda Muda Muda Muda Muda Muda Muda Muda Muda Muda Muda Muda Muda Muda Muda Muda Muda Muda Muda Muda Muda ",
      viewValue: '',
    },
  
  ]
  const Trash : IArdesses[] = [
    {
      index: 1,
      checkBoxStatus: false,
      starred: false,
      isIncoming: false,
      image: "../../../assets/Users/User6.jpg",
      fullname: "DIO brando",
      when: "yesterday",
      shorterText: "HO-HO",
      fulltext: "Muda Muda Muda Muda Muda Muda Muda Muda Muda Muda Muda Muda Muda Muda Muda Muda Muda Muda Muda Muda Muda Muda Muda Muda Muda Muda Muda Muda ",
      viewValue: '',
    },
    {
      index: 2,
      checkBoxStatus: false,
      starred: false,
      isIncoming: true,
      image: "../../../assets/Users/User3.jpg",
      fullname: "Giorno Giovanna",
      when: "30 min-s ago",
      shorterText: "I have a dream!",
      fulltext: "My name is Giovanni Giorgio, but my friends call me simply Giorgio",
      viewValue: '',
    },
    {
      index: 3,
      checkBoxStatus: false,
      starred: false,
      isIncoming: true,
      image: "../../../assets/Users/User4.jpg",
      fullname: "Bruno Bucciarati",
      when: "yesterday 6:00",
      shorterText: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eius, fugiat!",
      fulltext: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eius, fugiat!",
      viewValue: '',
    },
    {
      index: 4,
      checkBoxStatus: false,
      starred: false,
      isIncoming: false,
      image: "../../../assets/Users/User5.jpg",
      fullname: "Speedwagon",
      when: "2 days ago 18:00",
      shorterText: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eius, fugiat!",
      fulltext: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eius, fugiat!",
      viewValue: '',
    },
  ]
  
  
  export const Sections : ISection[][] = [
    [
      {
        index: 0,
        isDivider: false,
        iconID: 'inbox',
        text: 'Primary',
        viewValue: 'directory active',
        chats: Primary,
      },
      {
        index: 1,
        isDivider: false,
        iconID: 'group',
        text: 'Sociall',
        viewValue: 'directory',
        chats: Sociall,
      },
      {
        index: 2,
        isDivider: false,
        iconID: 'local_offer',
        text: 'Promotion',
        viewValue: 'directory',
        chats: Promotion,
      },
    ],
    [
      {
        index: 3,
        isDivider: false,
        iconID: 'star',
        text: 'Starred',
        viewValue: 'directory',
        chats: Starred,
      },
      {
        index: 4,
        isDivider: false,
        iconID: 'send',
        text: 'Sent Mails',
        viewValue: 'directory',
        chats: Incoming,
      },
    ],
    [
      {
        index: 5,
        isDivider: false,
        iconID: 'drafts',
        text: 'Drafts',
        viewValue: 'directory',
        chats: Drafts,
      },
      {
        index: 6,
        isDivider: false,
        iconID: 'backspace',
        text: 'Spam',
        viewValue: 'directory',
        chats: Spam,
      },
      {
        index: 7,
        isDivider: false,
        iconID: 'delete',
        text: 'Trash',
        viewValue: 'directory',
        chats: Trash,
      },
    ],
  ]
  
  
  // export function getStared() : IArdesses[]{
  //   console.log(Sections);
  //   let tmp: IArdesses[] = [];
  //   for (let i = 0; i < Sections.length; i++) {
  //     for (let j = 0; j < Sections[i].length; j++) {
  //       //@ts-ignore
  //       for (let v = 0; v < Sections[i][j].chats.length; v++) {
  //         //@ts-ignore
  //         if(Sections[i][j].chats[v].starred){
  //           //@ts-ignore
  //           tmp.push(Sections[i][j].chats[v]);
  //         }
  //       }
  //     }
  //   }
  //   return tmp;
  // };
  // export function getIncoming() : IArdesses[]{
  //   let tmp: IArdesses[] = [];
  //   for (let i = 0; i < Sections.length; i++) {
  //     for (let j = 0; j < Sections[i].length; j++) {
  //       //@ts-ignore
  //       for (let v = 0; v < Sections[i][j].chats.length; v++) {
  //         //@ts-ignore
  //         if(Sections[i][j].chats[v].starred){
  //           //@ts-ignore
  //           tmp.push(Sections[i][j].chats[v]);
  //         }
  //       }
  //     }
  //   }
  //   return tmp;
  // };
  