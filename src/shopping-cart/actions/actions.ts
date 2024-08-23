// 'use client'

import { getCookie, hasCookie, setCookie } from "cookies-next";
import { cookies } from 'next/headers';


export const getCookieCart = (): { [id: string]: number } => {
    if (hasCookie('cart')) {
        const cookieCart = JSON.parse(getCookie('cart') as string ?? '{}');
        return cookieCart;
    }
    return {};
}


export const addProductToCart = (id: string) => {

    const cookiesCart = getCookieCart();

    if (cookiesCart[id]) {
        cookiesCart[id] = cookiesCart[id] + 1;
    } else {
        cookiesCart[id] = 1;
    }

    setCookie('cart', JSON.stringify(cookiesCart))


}

export const removeProductFromCart = (id: string) => {

    const cookiesCart = getCookieCart();

    // if (cookiesCart[id]) {
    //     cookiesCart[id] = 0;
    // }
    // setCookie('cart', JSON.stringify(cookiesCart)) o

    delete cookiesCart[id];
}