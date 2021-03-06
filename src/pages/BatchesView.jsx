import React, { Component, Fragment } from 'react'
import api from '../api'
import ProductListItem from "../components/ProductListItem";
import ContactForm from "../components/ContactForm";

import styled from 'styled-components'

const Wrapper = styled.div`
    padding: 40px;
`

class BatchesView extends Component {
    constructor(props) {
        super(props)
        this.state = {
            batches: [],
            isLoading: false,
        }
    }

    componentDidMount = async () => {
        this.setState({ isLoading: true })

        window.location.href = "https://www.volamtar.com";
        // await api.getActiveBatches().then(batches => {
        //     this.setState({
        //         batches: batches.data.data,
        //         isLoading: false,
        //     })
        // })
    }

    render() {
        const { batches, isLoading } = this.state

        return (
            <Wrapper>
                <div className="container">
                    <div className="column columns is-multiline">
                    {batches && batches.length ? (
                        batches.map((product, index) => (
                        <ProductListItem
                            product={product}
                            key={index}
                        />
                        ))
                    ) : (
                        <div className="column">
                        <span className="title has-text-grey-light">
                            No products found!
                        </span>
                        </div>
                    )}
                    </div>
                </div>
            </Wrapper>
        )
    }
}

export default BatchesView