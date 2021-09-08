function EventObserver() {
  this.observers = [];
}

EventObserver.prototype = {
  subscribe: function(fn) {
    this.observers.push(fn);
    console.log(`You are now subscribed to ${fn.name}`);
  },
  unsubscribe: function(fn) {
    // Fliter out from the list whatever matched the callback function. If there is no match, the callback gets to stay on the list. The filter returns a new list and reassigns the list of observers.
    this.observers = this.observers.filter(function(item) {
      if(item !== fn) {
        return item;
      }
    });
    console.log(`You are now unsubscribed from ${fn.name}`);
  },
  fire: function() {
    this.observers.forEach(function(item) {
      item.call();
    });
  }
}

const click = new EventObserver();

// Event Listeners
document.querySelector('.sub-ms').addEventListener('click', function() {
  click.subscribe(getCurMilliseconds);
});

document.querySelector('.unsub-ms').addEventListener('click', function() {
  click.unsubscribe(getCurMilliseconds);
});

document.querySelector('.sub-s').addEventListener('click', function() {
  click.subscribe(getCurSeconds);
});

document.querySelector('.unsub-ms').addEventListener('click', function() {
  click.unsubscribe(getCurSeconds);
});

document.querySelector('.fire').addEventListener('click', function() {
  click.fire();
});

// Click Handler
const getCurMilliseconds = function() {
  console.log(`Current Milliseconds: ${new Date().getMilliseconds()}`);
}

const getCurSeconds = function() {
  console.log(`Current Seconds: ${new Date().getSeconds()}`);
}

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