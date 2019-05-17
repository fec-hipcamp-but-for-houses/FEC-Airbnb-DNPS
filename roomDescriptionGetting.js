// From App.jsx
import React from 'react';
import axios from 'axios';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      data: null,
    };
    this.addDescription = this.addDescription.bind(this);
  }

  componentDidMount() {
    this.addDescription();
  }

  addDescription() {
    axios.get('http://localhost:3004/rooms', {
      params: {
        listingId: 0,
      },
    })
      .then((res) => {
        console.log('res.data: ', res.data);
        this.setState({
          data: res.data,
        });
      });
  }
//output

/*{ title: 'Dynamic Configuration Executive',
  city: 'Elisabethside',
  room: 
   { houseType: 
      { guestNum: 94719,
        bedroomNum: 89136,
        bedNum: 57804,
        bathNum: 95345 },
     greatLocation: 'Sed et non ab adipisci sunt odio delectus eum quibusdam.',
     superhost: 'Sit esse quia quia delectus quia.',
     sparkling: 'Fugiat aperiam assumenda asperiores totam neque illum.' },
  rmDescription: 'Itaque laudantium eos tenetur quae vel et quia hic. Et doloribus dolores reprehenderit ipsum et. Alias rerum ut dolor repellat qui. Distinctio fuga veritatis accusamus. Praesentium deleniti qui quod dolorem voluptatem.\n \rFacere corporis laudantium eligendi molestias reiciendis incidunt. Deserunt consequatur ex blanditiis quidem. Quos dolores numquam voluptatem in quo sequi in consequuntur tempora. Itaque omnis nemo et qui. Est eaque ut. Odio quam quas fugit eius.\n \rUt qui magnam ipsam magnam similique facilis deserunt aut ex. Veniam architecto sunt ea neque velit aut autem totam. Ut ut ducimus sit voluptas impedit modi. Culpa aperiam aut. Temporibus quod non cumque autem minus iusto maxime est vel.',
  space: 'Aut placeat ea quam ratione. Nihil amet nobis possimus pariatur iusto sapiente eos ullam sunt. Minus doloremque consequatur assumenda facilis ea nihil.',
  access: 'Adipisci maxime eos magni. Aut dolores voluptas quo quidem pariatur ipsa eius eos. Consequatur placeat laboriosam eum corporis ipsam aut sequi nihil.',
  interact: 'Voluptatem numquam eligendi voluptatibus id dignissimos fugiat itaque officia. Enim ut fugit quia hic qui voluptate maiores aut. Qui molestiae dolorem voluptas praesentium ut.',
  amenities: 
   { basic: 
      { wifi: 'quia qui dolorum',
        laptop: 'sit est dolor',
        dryer: 'facere illum sunt',
        washer: 'illum ut et',
        tv: 'velit',
        airCondition: 'qui',
        essential: 'Quia nam delectus amet id.' },
     facilities: { parking: 'quasi est minima', stairs: 'nobis eveniet culpa' },
     dining: 
      { kitchen: 'Nemo eaque explicabo aut quia non eveniet.',
        coffee: 'qui omnis inventore',
        cooking: 'hic dicta animi',
        microwave: 'minus iusto voluptatem' },
     bedbath: 
      [ 'sequi sint vel',
        'recusandae dolor pariatur',
        'dolorum expedita eius',
        'ut provident sit' ],
     safety: [ 'eos ut perferendis', 'iure ad sapiente', 'aut quis vel' ],
     notInclude: [ 'possimus aut fugit', 'ea voluptatum libero' ] },
  neighbor: 
   { features: 'Labore cum qui non sint et porro accusantium. Est distinctio illum et. Veritatis et nulla aut repellendus dolor voluptas vero dolorem. Consequatur molestiae culpa saepe repudiandae vel consequatur. Error atque soluta et quisquam nam. Incidunt voluptatem in est autem ullam est voluptatum consequatur deserunt.',
     getAround: 'Impedit ut sit consequatur modi in et. Repellendus repellendus totam totam. Similique ratione est optio voluptatem id cumque velit voluptatem quos. Debitis totam maiores repellendus exercitationem sit.' },
  polices: 
   { rules: 'Facilis a aut esse. Rerum et quo voluptatem sit inventore sit sed deleniti. Aut eligendi explicabo. Molestiae expedita aperiam corrupti asperiores voluptatem recusandae veritatis perspiciatis unde.',
     acknowledge: 'Optio eius dolores excepturi nihil ab officia odit vel. Quia delectus eum tempore. Error qui ipsam libero. Iure facere molestias odit maxime illum velit quo aut. Cupiditate soluta suscipit dolorem velit aut rerum quia repudiandae.',
     cancel: 
      { moderate: 'quibusdam molestiae illo',
        policy: 'Aliquam sint repellat alias. Eos assumenda corporis aspernatur. Officia sint eligendi cumque voluptatem est quibusdam recusandae consequatur. Nihil ipsum sed autem quas id ut. Autem vitae quod cupiditate qui voluptas. Harum vel dicta molestiae et qui harum nostrum.',
        imgUrl: 'https://s3-us-west-1.amazonaws.com/imageurl/cancelPic.png' } } }  */
  render() {
    return (
      <div>
        <p>test</p>
      </div>
    );
  }
}

export default App;
