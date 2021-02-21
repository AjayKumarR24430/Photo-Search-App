import React, { Component } from 'react';
import axios from 'axios';

import './App.css';
import ImageList from './Components/ImgList';
import SearchForm from './Components/SearchPhotos';
const APP_ID = '97nHEKIghaJRteSgIrQHMO5oaQZ0Bgvbcr0KRCV3siE';

export default class App extends Component {
	constructor() {
		super();
		this.state = {
			imgs: [],
			loadingState: true
		};
	}

	componentDidMount() {
		this.performSearch();
	}

	performSearch = (query = 'Happy') => {
		axios
			.get(
				`https://api.unsplash.com/search/photos/?page=1&per_page=10&query=${query}&client_id=${APP_ID}`
			)
			.then(data => {
        console.log(data)
				this.setState({ imgs: data.data.results, loadingState: false });
			})
			.catch(err => {
				console.log('Error happened during fetching!', err);
			});
	};

	render() {
		return (
			<div>
				<div className="main-header">
					<div className="inner">
						<h1 className="main-title">Photo Search Using Unsplash JS</h1>
						<SearchForm onSearch={this.performSearch} />
					</div>
				</div>
				<div className="main-content">
					{this.state.loadingState
						? <p>Loading</p>
						: <ImageList data={this.state.imgs} />}
				</div>
			</div>
		);
	}
}