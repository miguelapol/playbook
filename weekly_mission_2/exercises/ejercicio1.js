console.log("Twitter");
const User_twitter= {
    user:'miguel_apol',
    username:'apol1995',
    followers:12,
    bio:'Mi nombre es Miguel Álvarez Polanco, soy un estudiante de Ingeniería Informática de la Universidad de Córdoba. Me gusta la programación y la música.',
    location:'Córdoba, Argentina',
    website:'https://www.apol1995.com',
    email:'aaa@gmail.com',
    phone:'+54 9 11-2222-3333',
    getGeneralInfo: function(){
        return `${this.user} (${this.username}) tiene ${this.followers} seguidores, su biografía es: ${this.bio}`;
    }
}
const trendin_topic_twitt={
    topic:'#trending',
    likes:20,
    comments:10,
    retwittear_comments:5,
    getinfo:function(){
        return `El tópico ${this.topic} tiene ${this.likes} likes, ${this.comments} comentarios y ${this.retwittear_comments} retwittear_comments`;
    }
}
const hashtag={
    hashtag:'#trending',
    likes:20,    
    gethashtags:function(){
        return  `el hashtag ${this.hashtag} tiene ${this.likes} likes`;
    }
}
console.log("facebook");
const user_facebook={
    nombre:'miguel',
    apellido:'alvarez',
    edad:22,
    email:'apol@gmail.com',
    telefono:'+54 9 11-2222-3333',
    getGeneralInfo:function(){
        return `nombre es ${this.nombre} apellido es ${this.apellido} edad es ${this.edad} email es ${this.email} telefono es ${this.telefono}`; 
    }
}
const post_facebook = {
    user:'apol1995',
    likes:20,
    comments:10,
    reactions:20,
    getUserinfo:function(){
        return `El usuario ${this.user} tiene ${this.likes} likes, ${this.comments} comentarios y ${this.reactions} reactions`;
    }
}
const biagraphy={
    user:'apol1995',
    number_friendships:20,
    number_posts:10,
    number_comments:20,
    getUserbiography:function(){
        return `el usuario ${this.user} tiene ${this.number_friendships} amigos, ${this.number_posts} posts y ${this.number_comments} comentarios`;
    }
}
console.log("Uber");
const uber_profiles={
    name:'miguel',
    last_name:'alvarez',
    email:'A@gmail.com',
    phone:'+54 9 11-2222-3333',
    location:'Córdoba, Argentina',
    getGeneralInfo:function(){
        return `${this.name} ${this.last_name} tiene ${this.email} y ${this.phone}`;
    }
}
const Uber_travel={
    name_user:'miguel',
    conductor:'luis',
    destination:'Córdoba, Argentina',
    date:'10/10/2020',
    time:'10:00',
    price:100,
    seats:2,
    get_travel_info:function(){
        return `${this.name_user} ${this.conductor} viaja a ${this.destination} el día ${this.date} a las ${this.time} y el precio es ${this.price} y hay ${this.seats} asientos disponibles`;
    }
}
console.log("Twitter:"+User_twitter.getGeneralInfo());
console.log("Facebook:"+user_facebook.getGeneralInfo());
console.log("Uber:"+uber_profiles.getGeneralInfo());
console.log("Uber:"+Uber_travel.get_travel_info());