import React from 'react';
import { render } from '@react-email/render';
import { Html, Button} from "@react-email/components";

function Email() {
    return (
        <Html>
            <div>Hi there</div>
            <Button href="https://example.com" style={{ color: '#61dafb' }}>
                Click me
            </Button>
        </Html>
    )
}

export default function rendered() {
    return render(<Email />, { pretty: true })
}
