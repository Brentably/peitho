import { useEffect, useState } from 'react';
import { InferGetStaticPropsType } from 'next';
import * as React from 'react'


interface PropsType<T> {
    items: T[];
    renderer: (item: T) => React.ReactNode;
  }
  
interface AbstractItem {
    video_id: string;
    play: string;
    key: string;
}

export async function getStaticProps() {
    const url = 'https://www.tikwm.com/api/feed/list?region=US&count=1'
    const res = await fetch(url)
    const posts = await res.json()
    const data = posts['data']
    return {
        props: { items: data}
    }
}

export default function Trending<T extends AbstractItem>(props: PropsType<T>) {
    const items = props.items;
    const listItems = items.map((item) =>
        <li key="{item.video_id}">{item.play}</li>
    );
    return (
        <div>
            <button>Hello!</button>
            <ol className='list-disc'>
                {listItems}
            </ol>
        </div>
    )
        
}