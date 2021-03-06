import React from "react";
import './collection-preview.styles.scss'
import CollectionItem from "../collection-item/collection-item.component";
const PreviewCollection = ({  title, items }) => (
    <div>
        <div className={'collection-preview'}>
            <h1 onClick={'title'}>{title.toUpperCase()}</h1>
            <div className={'preview'}>
                {
                    items.filter((item, idx)=> idx < 4)
                        .map((item) => (
                        <CollectionItem key={item.id} item={item}/>
                    ))
                }
            </div>
        </div>
    </div>
);
export default PreviewCollection;