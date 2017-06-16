import Ember from 'ember';

var games = [{
  id: 1,
  name: "Hitman",
  about: "The monestories Pastor is stolen so as to force Agent-47 to do a mission for them bt instead they put themselves in danger and are hunted by Hitman(Agent-47).",
  age: 10,
  image: "https://www.walldevil.com/wallpapers/a85/thumb/cool-wallpapers-games-hitman-game.jpg"
}, {
  id: 2,
  name: "BattleField",
  about: "The country is invaded by Terrorist who have spread thhrough the country killing civilians. You are a marine-soldier who is sworn to protect the country and you are under the command to secure different parts of the country.",
  age: 15,
  image: "https://www.walldevil.com/wallpapers/a66/thumb/wallpaper-badcommand2-designs-image-battlefield-images-2.jpg"
}, {
  id: 3,
  name: "Spiner Target",
  about: "You are a hire assasin whose work is to take out most of the most protected people and find away out with out being caught.",
  age: 12,
  image: "http://hdwallpapersbuzz.com/wp-content/uploads/2017/03/1920x1080-wallpaper-gaming-images-11-300x200.jpg"
}]

export default Ember.Route.extend({
  model () {
    return games;
  },
});
