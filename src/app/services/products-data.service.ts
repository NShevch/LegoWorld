export default class ProductsData {
  private products: Product[] = [
    {
      name: "Lamborghini Sián FKP 37",
      description: `Experience the unmistakable power and looks of the 
        Lamborghini Sián FKP 37 as you become immersed in this LEGO® Technic™ 
        building kit (42115). With superb detailing, the model car is a faithful
        representation of the original Sián FKP 37 in eye-catching lime green 
        with golden rims.`,
      image: "/assets/images/Lamba.jpeg",
      price: 380
    },
    {
      name: "Hogwarts™ Icons - Collectors' Edition",
      description: `LEGO® Harry Potter™ Hogwarts™ Icons - Collectors' Edition 
        is a recreation of some of the series’ most memorable imagery, brought 
        together in a celebratory display piece created with adult enthusiasts 
        in mind.`,
      image: "/assets/images/Hogwarts.png",
      price: 250
    },
    {
      name: "NINJAGO® City Gardens",
      description: `Rediscover cherished memories and favorite ninja heroes 
      with this NINJAGO® City Gardens (71741) set for play and display. 
      Celebrate the 10th anniversary of the world of NINJAGO by enjoying 
      a rewarding and fun-filled building task.`,
      image: "/assets/images/NINJAGO.jpeg",
      price: 300
    },
    {
      name: "The Disney Castle",
      description: `Bring the magical world of Disney to your home with 
      The Disney Castle. This highly detailed LEGO® model with over 4,000 
      pieces offers a rewarding build and play experience, and comes with 
      an array of exciting Disney-themed features and functions. 
      The intricately detailed facade and towers replicate the iconic 
      Walt Disney World® Resort Cinderella Castle, and each accessible 
      castle room includes special features inspired by some of Disney’s 
      greatest animated feature films, providing endless play possibilities 
      with the included minifigures: Mickey Mouse, Minnie Mouse, Donald Duck, 
      Daisy Duck and Tinker Bell, or other characters from your collection.`,
      image: "/assets/images/Disney.jpeg",
      price: 350
    },
    {
      name: "Ghostbusters™ ECTO-1",
      description: `If you're a Ghostbusters™ fan, we've got just the thing 
      for you – the LEGO® Ghostbusters ECTO-1! Bust the stress out of everyday 
      life and indulge in some quality me time as you build a LEGO version of 
      the converted 1959 Cadillac Miller-Meteor ambulance from the Ghostbusters 
      movies.`,
      image: "/assets/images/Ghostbusters.jpeg",
      price: 199
    },
    {
      name: "R2-D2™",
      description: `Relive classic Star Wars™ moments as you build this 
      exceptionally detailed R2-D2 LEGO® droid figure. The brilliant 
      new-for-May-2021 design is packed with authentic details, including 
      a retractable mid-leg, rotating head, opening and extendable front 
      hatches, a periscope that can be pulled up and turned, and Luke 
      Skywalker’s lightsaber hidden in a compartment in the head.`,
      image: "/assets/images/R2-D2.jpeg",
      price: 200
    },
    {
      name: "LEGO® DC Batman™ Batmobile™ Tumbler",
      description: `LEGO® DC Batman™ Batmobile™ Tumbler (76240) will stretch 
      your construction skills and capture the style of one of the most 
      iconic vehicles in cinema history.

      The ultimate, armored crime-fighting machine
      The impressive build-and-display Tumbler from the Dark Knight™ trilogy 
      of Batman movies features an opening roof, which provides access to 
      the driver and passenger seats and control panel.`,
      image: "/assets/images/Batman.png",
      price: 230
    },
    {
      name: "Imperial Light Cruiser™",
      description: `Open up a galaxy of Star Wars: The Mandalorian Season 2 
      adventures for fans with this LEGO® brick-built model of the Imperial 
      Light Cruiser (75315). It features a bridge that doubles as a handle 
      for flying, 2 rotating turrets with spring-loaded shooters, plus 2 
      mini TIE Fighters and a launcher. A hatch gives easy access to the 
      cabin which has a hologram table and storage for the electrobinoculars 
      and other accessory elements.`,
      image: "/assets/images/Cruiser.png",
      price: 160
    },
    {
      name: "NASA Apollo 11 Lunar Lander",
      description: `Celebrate man's first moon landing with this LEGO® Creator 
      Expert 10266 NASA Apollo 11 Lunar Lander building set—developed in 
      cooperation with NASA to mark the 50th anniversary of a historical 
      event that captivated the world. This collectible model features a 
      highly detailed replica of Apollo 11's Eagle lunar module, plus a 
      depiction of the lunar surface, complete with crater, footprints 
      and a U.S. flag. `,
      image: "/assets/images/Apollo.jpeg",
      price: 100
    },
    {
      name: "LEGO® Marvel The Eternals In Arishem's Shadow",
      description: `Combine all the fun elements of the Marvel Studios' 
      The Eternals movie in one awesome LEGO® playset. In Arishem's 
      Shadow (76155) brings 4 Eternals, a Deviant and a Celestial 
      together in a superhero confrontation kids will love.`,
      image: "/assets/images/Marvel.jpeg",
      price: 60
    },
    {
      name: "Ford Mustang Shelby® GT500®",
      description: `Let kids aged 9 and up build their own drag race car toy 
      with this thrilling LEGO® Technic™ Ford Mustang Shelby® GT500® (42138) 
      set. The immersive build gives kids a great introduction to 
      engineering – but that’s just the start! Using the 2 pull-back motors, 
      kids can send the toy car racing. Use the AR app to take the play 
      experience to the next level with a host of exciting, augmented 
      reality features.`,
      image: "/assets/images/Mustang.png",
      price: 50
    },
  ]

  public get() {
    return this.products;
  }

  public add(product: Product) {
    this.products.push(product);
  }

  public getSpecificProductByName(name: string): Product {
    const product = this.products.find(product => product.name === name)!;
    return product;
  }
}