function friend(friends){
    let BFF = [];
    friends.map((friend) => {
      if (friend.length === 4) {
        BFF.push(friend)
      }
    })
    return BFF;
}

// other solution
function friend(friends){
    return friends.filter(name => name.length === 4)
}
