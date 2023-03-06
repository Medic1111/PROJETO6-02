export const useFetchApi = () => {
const [products, setProducts] = useState([]);
const [feedback, setFeedback] = useState(null);


const fetchApi = async () => {
	await axios
		  .get(url)
		  .then((sucesso) => {
			console.log(sucesso);
			setProducts(sucesso.data.products);
		  })
		  .catch((error) => {
			console.log(error);
			setFeedback(error.response.data.message);
		  });
	  };
	  useEffect (
		() => {
			fetchApi()
		},
		[url]
	  )

}