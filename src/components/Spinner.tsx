interface Props {
    message?: string;
}

export const Spinner = (props: Props) => (
    <div
        id="spinner-container"
        className="flex-1"
    >
        {props?.message && (
            <p
                id="loading-message"
                className="mb-6"
            >
                {props.message}
            </p>
        )}
        <div className="lds-roller">
            <div>
                <div />
                <div />
                <div />
                <div />
                <div />
            </div>
        </div>
    </div>
);
