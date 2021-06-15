enum Membership {
  Simple, // 0
  Standard, // 1
  Premium, // 2
}

const membership = Membership.Standard;
const membershipReverse = Membership[2];

console.log(membership); // output => 1
console.log(membershipReverse); // output => Premium

enum SocialMedia {
  Facebook = 'FACEBOOK',
  INSTAGRAM = 'INSTAGRAM',
}

const social = SocialMedia.INSTAGRAM;
console.log(social); // output => INSTAGRAM
