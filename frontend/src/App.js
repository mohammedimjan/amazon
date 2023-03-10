import data from "./data";

function App() {
	return (
		<div className="App">
			<header className="App-header">
				<a href="/">
					Ama<span>zona</span>
				</a>
			</header>
			<main>
				<h1>Featured Products</h1>
				<div className="products">
					{data.products.map((product) => (
						<div className="product" key={product.slug}>
							<a href={product.slug}>
								<img src={product.image} alt={product.name} />
							</a>
							<div className="product-info">
								<a href={product.slug}>
									<p>{product.name}</p>
								</a>
								<p>
									<strong>${product.price}</strong>
								</p>
								<button>Add To Cart</button>
							</div>
						</div>
					))}
				</div>
			</main>
		</div>
	);
}

export default App;
