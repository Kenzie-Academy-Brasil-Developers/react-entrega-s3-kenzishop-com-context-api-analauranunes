import { createContext, useState } from "react";

export const ProductsContext = createContext([]);

export const ProductsProvider = ({ children }) => {
  const [products] = useState([
    {
      id: 1,
      name: "Hora de Aventura",
      price: 30,
      image:
        "https://i5.walmartimages.com/asr/a5e66bf4-077b-461c-8709-6b4898bde990_1.caf701700e817fb48adcb54c61433efc.jpeg",
      quantity: 0,
    },
    {
      id: 2,
      name: "A Casa da Coruja",
      price: 35,
      image:
        "https://i.etsystatic.com/27460775/r/il/254ca0/3277990165/il_fullxfull.3277990165_pt9a.jpg",
      quantity: 0,
    },
    {
      id: 3,
      name: "Steven Universo",
      price: 35,
      image:
        "https://i.pinimg.com/originals/b0/f3/77/b0f37719486633c14e1f503cc3bd9d86.jpg",
      quantity: 0,
    },
    {
      id: 4,
      name: "Ursos Sem Curso",
      price: 27,
      image:
        "https://zula.sg/wp-content/uploads/2019/09/we-bare-bears-ezlink-5.jpg",
      quantity: 0,
    },
    {
      id: 5,
      name: "Ursinhos Carinhosos",
      price: 28,
      image:
        "https://i.pinimg.com/originals/b5/d0/69/b5d069c56db1a3335feea6b878ae4437.jpg",
      quantity: 0,
    },
    {
      id: 6,
      name: "Gravity Falls",
      price: 35,
      image:
        "https://www.ubuy.vn/productimg/?image=aHR0cHM6Ly9pbWFnZXMtbmEuc3NsLWltYWdlcy1hbWF6b24uY29tL2ltYWdlcy9JLzYxLXAlMkJ0anV5M0wuX1NTNDAwXy5qcGc.jpg",
      quantity: 0,
    },
    {
      id: 7,
      name: "Toy Story",
      price: 26,
      image:
        "https://c8.alamy.com/comp/DRX48H/toy-story-cards-set-on-white-background-DRX48H.jpg",
      quantity: 0,
    },
    {
      id: 8,
      name: "Bob Esponja",
      price: 23.0,
      image:
        "https://media.entertainmentearth.com/assets/images/49abe585691f4b81a879cf91163d4a6exl.jpg",
      quantity: 0,
    },
    {
      id: 9,
      name: "Crossover Cartoon",
      price: 40,
      image:
        "https://bleedingcool.com/wp-content/uploads/2016/04/e1458d2f-3f79-4a63-9e89-109997ecefff-1200x900.jpg",
      quantity: 0,
    },
    {
      id: 10,
      name: "Valente",
      price: 25,
      image:
        "https://images-americanas.b2w.io/produtos/2060203791/imagens/card-game-valente-desafio-do-arco/2060203791_1_large.jpg",
      quantity: 0,
    },
    {
      id: 11,
      name: "Scooby Doo",
      price: 26,
      image: "https://m.media-amazon.com/images/I/9172XGL8WDL._AC_SX569_.jpg",
      quantity: 0,
    },
  ]);

  return (
    <ProductsContext.Provider value={{ products }}>
      {children}
    </ProductsContext.Provider>
  );
};
