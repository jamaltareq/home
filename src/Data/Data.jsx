import React, { createContext } from 'react'
export let dataFood = createContext()
export default function DataContext(props) {
    let food = [
        {
            id: 1,
            image: "burger-1",
            type: '.png',
            name: "sumal burger",
            prise: "15",
            rating: "4.1"
        },
        {
            id: 2,
            image: "burger-2",
            type: '.png',
            name: "big burger",
            prise: "30",
            rating: "4.9"
        },
        {
            id: 3,
            image: "pizza-1",
            type: '.png',
            name: "pizza zeton",
            prise: "19",
            rating: "4.3"
        },
        {
            id: 4,
            image: "pizza-2",
            type: '.png',
            name: "pizza chese",
            prise: "16",
            rating: "4.5"
        },
        {
            id: 5,
            image: "bowl-food",
            type: '.png',
            name: "bowl chicken",
            prise: "23",
            rating: "4.8"
        },
        {
            id: 6,
            image: "chicken-1",
            type: '.png',
            name: "bowl Crispy chicken",
            prise: "20",
            rating: "4.8"
        },
        {
            id: 7,
            image: "chicken-2",
            type: '.png',
            name: "Grilled chicken",
            prise: "29",
            rating: "5"
        },
        {
            id: 8,
            image: "freepik-export",
            type: '.png',
            name: "dubel shaurma",
            prise: "20",
            rating: "4.3"
        },
        {
            id: 9,
            image: "shaurma_2",
            type: '.png',
            name: "singel shaurma",
            prise: "10",
            rating: "4"
        },
        {
            id: 10,
            image: "plate-food",
            type: '.png',
            name: " plate",
            prise: "23",
            rating: "4.7"
        },
        {
            id: 11,
            image: "delicious-donuts",
            type: '.png',
            name: " donuts",
            prise: "30",
            rating: "4.9"
        },
    ]
    return (
        <dataFood.Provider value={food}>
            {props.children}
        </dataFood.Provider>
    )
}
