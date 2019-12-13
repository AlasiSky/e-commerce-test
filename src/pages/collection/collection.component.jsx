import React from 'react';
import { connect } from 'react-redux';

import { selectCollection } from '../../Redux/shop/shop.selector';

import CollectionItem from '../../components/collection-item/collection-item.component';

import './collection.styles.scss';

const CollectionPage = ({ collection }) => (
    <div className='collection-page'>
        <h2>collection Page</h2>
    </div>
);

const mapStateToProps = (state, ownProps) => ({
    collections: selectCollection(ownProps.match.params.collectionId)(state)
})

export default connect(mapStateToProps)(CollectionPage);