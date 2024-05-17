function Pagination({ onPageChange, currentPage }) {
	const tatal = 5
	const handleClick = page => [onPageChange(page)]
	const pages = []
	for (let i = 0; i < pages.length; i++) {
		pages.push(i)
	}
	return (
		<div className='pagination'>
			{pages.map(page => (
				<button onClick={() => handleClick(page)}>{page}</button>
			))}
		</div>
	)
}

export default Pagination
