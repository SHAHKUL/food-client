
export const foodTypes = [
    {
        name: 'burger',
        img: "https://images.unsplash.com/photo-1568901346375-23c9450c58cd?q=80&w=1000&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8YnVyZ2VyfGVufDB8fDB8fHww",
        id: crypto.randomUUID()
    },
    {
        name: 'gyros',
        img: 'https://images.immediate.co.uk/production/volatile/sites/30/2021/08/chicken-gyros-88debd3.jpg?resize=768,574',
        id: crypto.randomUUID()
    },
    {
        name: 'pizza',
        img: 'https://cdn.marico.in/uploads/soya-pizza-1-3460.jpg',
        id: crypto.randomUUID()
    },
    {
        name: 'pasta',
        img: "https://foodhub.scene7.com/is/image/woolworthsltdprod/Easy-chicken-and-bacon-pasta:Mobile-1300x1150",
        id: crypto.randomUUID()
    },
]


// 24 foods (6 burger, 6 gyros, 6 pizza, 6 pasta)
export const foods = [
    {
        name: 'Burger 1',
        category: 'burger',
        img: "https://www.shutterstock.com/image-photo/classic-hamburger-stock-photo-isolated-600nw-2282033179.jpg",
        id: crypto.randomUUID(),
        price: Math.floor(Math.random() * 20 + 7)
    },
    {
        name: 'Burger 2',
        category: 'burger',
        img: "https://t3.ftcdn.net/jpg/00/69/85/64/360_F_69856461_O8p56mlDwWo0mXFswcYbGbP7Ihlbimiw.jpg",
        id: crypto.randomUUID(),
        price: Math.floor(Math.random() * 20 + 7)
    },
    {
        name: 'Burger 3',
        category: 'burger',
        img:"https://img.freepik.com/free-photo/delicious-burger-with-many-ingredients-isolated-white-background-tasty-cheeseburger-splash-sauce_90220-1266.jpg?size=338&ext=jpg&ga=GA1.1.34264412.1699920000&semt=ais",
        id: crypto.randomUUID(),
        price: Math.floor(Math.random() * 20 + 7)
    },
    {
        name: 'Burger 4',
        category: 'burger',
        img: "https://www.allrecipes.com/thmb/5JVfA7MxfTUPfRerQMdF-nGKsLY=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/25473-the-perfect-basic-burger-DDMFS-4x3-56eaba3833fd4a26a82755bcd0be0c54.jpg",
        id: crypto.randomUUID(),
        price: Math.floor(Math.random() * 20 + 7)
    },
    {
        name: 'Burger 5',
        category: 'burger',
        img: "https://www.foodandwine.com/thmb/DI29Houjc_ccAtFKly0BbVsusHc=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/crispy-comte-cheesburgers-FT-RECIPE0921-6166c6552b7148e8a8561f7765ddf20b.jpg",
        id: crypto.randomUUID(),
        price: Math.floor(Math.random() * 20 + 7)
    },
    {
        name: 'Pizza 1',
        category: 'pizza',
        img: "https://www.foodandwine.com/thmb/Wd4lBRZz3X_8qBr69UOu2m7I2iw=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/classic-cheese-pizza-FT-RECIPE0422-31a2c938fc2546c9a07b7011658cfd05.jpg",
        id: crypto.randomUUID(),
        price: Math.floor(Math.random() * 20 + 7)
    },
    {
        name: 'Pizza 2',
        category: 'pizza',
        img: "https://www.vegrecipesofindia.com/wp-content/uploads/2018/05/paneer-pizza-recipe-1.jpg",
        id: crypto.randomUUID(),
        price: Math.floor(Math.random() * 20 + 7)
    },
    {
        name: 'Pizza 3',
        category: 'pizza',
        img:"https://static.toiimg.com/thumb/msid-87930581,width-1280,resizemode-4/87930581.jpg",
        id: crypto.randomUUID(),
        price: Math.floor(Math.random() * 20 + 7)
    },
    {
        name: 'Pizza 4',
        category: 'pizza',
        img: "https://images.unsplash.com/photo-1604382354936-07c5d9983bd3?q=80&w=1000&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxleHBsb3JlLWZlZWR8Nnx8fGVufDB8fHx8fA%3D%3D",
        id: crypto.randomUUID(),
        price: Math.floor(Math.random() * 20 + 7)
    },
    {
        name: 'Pizza 5',
        category: 'pizza',
        img: "https://static.toiimg.com/thumb/msid-87930581,width-1280,resizemode-4/87930581.jpg",
        id: crypto.randomUUID(),
        price: Math.floor(Math.random() * 20 + 7)
    },
    {
        name: 'Gyros 1',
        category: 'gyros',
        img: "https://www.culinaryhill.com/wp-content/uploads/2022/04/Beef-Gyros-Culinary-Hill-1200x800-1.jpg",
        id: crypto.randomUUID(),
        price: Math.floor(Math.random() * 20 + 7)
    },
    {
        name: 'Gyros 2',
        category: 'gyros',
        img: "https://www.barbecook.com/cdn/shop/articles/barbecook_030321_23625.jpg?v=1678958368",
        id: crypto.randomUUID(),
        price: Math.floor(Math.random() * 20 + 7)
    },
    {
        name: 'Gyros 3',
        category: 'gyros',
        img: "https://travelfoodatlas.com/wp-content/uploads/2021/06/greek-gyros.jpg",
        id: crypto.randomUUID(),
        price: Math.floor(Math.random() * 20 + 7)
    },
    {
        name: 'Gyros 4',
        category: 'gyros',
        img:"https://insanelygoodrecipes.com/wp-content/uploads/2021/06/Homemade-Greek-Lamb-Meat-Gyros.jpg",
        id: crypto.randomUUID(),
        price: Math.floor(Math.random() * 20 + 7)
    },
    {
        name: 'Gyros 5',
        category: 'gyros',
        img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ1LeUdC_3sYx4QOSfFqKVhaUfq2mBQycMAlQ&usqp=CAU",
        id: crypto.randomUUID(),
        price: Math.floor(Math.random() * 20 + 7)
    },
    {
        name: 'Pasta 1',
        category: 'pasta',
        img:"https://i.ytimg.com/vi/JEeO_hagtVM/maxresdefault.jpg",
        id: crypto.randomUUID(),
        price: Math.floor(Math.random() * 20 + 7)
    },
    {
        name: 'Pasta 2',
        category: 'pasta',
        img: "https://www.allrecipes.com/thmb/5SdUVhHTMs-rta5sOblJESXThEE=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/11691-tomato-and-garlic-pasta-ddmfs-3x4-1-bf607984a23541f4ad936b33b22c9074.jpg",
        id: crypto.randomUUID(),
        price: Math.floor(Math.random() * 20 + 7)
    },
    {
        name: 'Pasta 3',
        category: 'pasta',
        img:"https://www.eatingwell.com/thmb/tHQnJTQzKASPYcq7uztWrzG7hd0=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/one-skillet-cheesy-ground-chicken-pasta-571ba976c8934b75bd995a0c0d292af9.jpg",
        id: crypto.randomUUID(),
        price: Math.floor(Math.random() * 20 + 7)
    },
    {
        name: 'Pasta 4',
        category: 'pasta',
        img: "https://www.inspiredtaste.net/wp-content/uploads/2023/09/Vegetable-Baked-Pasta-Video.jpg",
        id: crypto.randomUUID(),
        price: Math.floor(Math.random() * 20 + 7)
    },
    {
        name: 'Pasta 5',
        category: 'pasta',
        img:"https://assets.bonappetit.com/photos/5d4ddd602c815a00080f9771/1:1/w_2560%2Cc_limit/BA-0919-Creamy-Pasta-Crispy-Mushroom-Playbook.jpg",
        id: crypto.randomUUID(),
        price: Math.floor(Math.random() * 20 + 7)
    },
]