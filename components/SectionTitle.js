export default function SectionTitle({ title, titleSize="text-7xl", descriptions = [], append }) {

	return (
		<div className="flex flex-wrap justify-between gap-6">
            <h1 className={titleSize}>{title}</h1>
			<div className="max-w-5xl flex flex-col gap-6">
				{ descriptions.map( (d, di) => (
					<p key={di}>{d}</p>
				))}
			{ append && append }
			</div>
		</div>
	)
}