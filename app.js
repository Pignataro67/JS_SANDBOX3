const PageState = function() {
  let currentState = new homeState(this);

  this.init = function() {
    this.change(new homeState);
  }

  this.change = function(state) {
    currentState = state;
  }
};

// Home State
const homeState = function(page) {
  document.querySelector('#heading').textContent =  null;
  document.querySelector('#heading').innerHTML = `
    <div class="jumbotron">
    <h1 class="display-3">Hello, World!</h1>
    <p class="lead">This is simple hero unit, a simple jumbotron-style component for calling extra attention to featured content or information.</p>
    <hr> class="my-4">
    <p>It uses utility classes for typography and spacing to space content out within the larger container.</p>
    <p class="lead">
      <a class="btn btn-primary btn-lg" href="#" role="button">Learn More</a>
    </p>
  </div>
  `;
};

// About State
const aboutState = function(page) {
  document.querySelector('#heading').textContent = 'About Us';
  document.querySelector('#content').innerHTML = `
    <p>this is the about page</p>
  `;
}

// Contact State
const contactState = function(page) {
  document.querySelector('#heading').textContent = 'Contact Us';
  document.querySelector('#content').innerHTML = `
    
  `;
}

// ******************************************

// const User = function(name) {
//   this.name = name;
//   this.chatroom = null;
// }

// User.prototype = {
//   send: function(message, to) {
//     this.chatroom.send(message, this, to);
//   },
//   receive: function(message) {
//     console.log(`${from.name} to ${this.name}: ${message}`);
//   }
// }

// const Chatroom = function() {
//   let users = {}; // list of users

//   return {
//     register: function(user) {
//       users[user.name] = user;
//       user.chatroom = this;
//     },
//     send: function(message, from, to) {
//       if(to) { 
//         // Single user message
//         to.receive(message, from);
//       } else {
//         // Mass message
//         for(key in users) {
//           if(users[key] !== from) {
//             users[key].receive(message, from);
//           }
//         }
//       }
//     }
//   }
// }

// const pat = new User('Pat');
// const terri = new User('Terri');
// const xander = new User('Xander');
// const kenzie = new User('Kenzie');

// const chatroom = new Chatroom();

// chatroom.register(pat);
// chatroom.register(terri);
// chatroom.register(xander);
// chatroom.register(kenzie);

// pat.send('Hello Terri', terri);
// terri.send('Hello Pat, you are a good dev!', pat);
// xander.send('Hello Everyone!!!')

// function EventObserver() {
//   this.observers = [];
// }

// EventObserver.prototype = {
//   subscribe: function(fn) {
//     this.observers.push(fn);
//     console.log(`You are now subscribed to ${fn.name}`);
//   },
//   unsubscribe: function(fn) {
//     // Fliter out from the list whatever matched the callback function. If there is no match, the callback gets to stay on the list. The filter returns a new list and reassigns the list of observers.
//     this.observers = this.observers.filter(function(item) {
//       if(item !== fn) {
//         return item;
//       }
//     });
//     console.log(`You are now unsubscribed from ${fn.name}`);
//   },
//   fire: function() {
//     this.observers.forEach(function(item) {
//       item.call();
//     });
//   }
// }

// const click = new EventObserver();

// // Event Listeners
// document.querySelector('.sub-ms').addEventListener('click', function() {
//   click.subscribe(getCurMilliseconds);
// });

// document.querySelector('.unsub-ms').addEventListener('click', function() {
//   click.unsubscribe(getCurMilliseconds);
// });

// document.querySelector('.sub-s').addEventListener('click', function() {
//   click.subscribe(getCurSeconds);
// });

// document.querySelector('.unsub-ms').addEventListener('click', function() {
//   click.unsubscribe(getCurSeconds);
// });

// document.querySelector('.fire').addEventListener('click', function() {
//   click.fire();
// });

// // Click Handler
// const getCurMilliseconds = function() {
//   console.log(`Current Milliseconds: ${new Date().getMilliseconds()}`);
// }

// const getCurSeconds = function() {
//   console.log(`Current Seconds: ${new Date().getSeconds()}`);
// }

// function memberFactory() {
//   this.createMember = function(name, type) {
//     let member;

//     if(type === 'simple') {
//       member = new SimpleMembership(name);
//     } else if (type === 'standard') {
//       member = new StandardMembership(name);
//     } else if (type === 'super') {
//       member = new SuperMembership(name);
//     }

//     member.type = type;

//     member.define = function() {
//       console.log(`${this.name} (${this.type}): ${this.cost}`);
//     }

//     return member;
//   }
// }

// const SimpleMembership = function(name) {
//   this.name = name;
//   this.cost = '$5';
// }

// const StandardMembership = function(name) {
//   this.name = name;
//   this.cost = '$15';
// }

//   const SuperMembership = function(name) {
//   this.name = name;
//   this.cost = '$25';
// }

// const members = [];
// const factory = new memberFactory();

// members.push(factory.createMember('Pat P', 'simple'));
// members.push(factory.createMember('Pat D', 'super'));
// members.push(factory.createMember('Pat J', 'simple'));
// members.push(factory.createMember('Pat S', 'standard'));

// // console.log(members);

// members.forEach(function(member) {
//     member.define();
// });