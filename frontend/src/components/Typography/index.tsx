import { Heading, Paragraph, Span } from "./styles"

const Typography = () => {
    return (
        <div>
            <Heading level={1} size="large" color="red">Heading</Heading>
            <Paragraph size="medium" color="gray3">Paragraph</Paragraph>
            <Span size="small" color="gray1">Span</Span>
        </div>
    )
}

export default Typography