function memberFactory() {
  this.createMember = function(name, type) {
    let member;

    if(type === 'simple') {
      member = new SimpleMembership(name);
    } else if (type === 'standard') {
      member = new StandardMembership(name);
    } else if (type === 'super') {
      member = new SuperMembership(name);
    }

    member.type = type;

    member.define = function() {
      console.log(`${this.name} (${this.type}): ${this.cost}`);
    }

    return member;
  }
}

const SimpleMembership = function(name) {
  this.name = name;
  this.cost = '$5';
}

const StandardMembership = function(name) {
  this.name = name;
  this.cost = '$15';
}

  const SuperMembership = function(name) {
  this.name = name;
  this.cost = '$25';
}

const members = [];
const factory = new memberFactory();

members.push(factory.createMember('Pat P', 'simple'));
members.push(factory.createMember('Pat D', 'super'));
members.push(factory.createMember('Pat J', 'simple'));
members.push(factory.createMember('Pat S', 'standard'));

console.log(members);

members.forEach(function(member) {
    member.define();
});