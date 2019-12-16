import React from 'react';
import { connect } from 'react-redux';

import { createStructuredSelector } from 'reselect';
import { selectCollectionForPreview } from '../../Redux/shop/shop.selector';

import CollectionPreview from '../preview-collection/preview.collection.component'
import './collections-overview.styles.scss';

const CollectionsOverview = ({ collections }) => (
    <div className='collections-overview'>
        {collections.map(({id, ...otherSectionsProps}) => (
            <CollectionPreview key={id} {...otherSectionsProps} />
        ))} 
    </div>
)

const mapStateToProps = createStructuredSelector({
    collections: selectCollectionForPreview
})

export default connect(mapStateToProps)(CollectionsOverview);