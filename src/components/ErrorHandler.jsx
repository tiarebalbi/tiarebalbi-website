import * as React from 'react';
import { colors } from '@atlaskit/theme';
import ErrorIcon from '@atlaskit/icon/glyph/error';
import Flag, { FlagGroup } from '@atlaskit/flag';

export default class extends React.Component {
  constructor(props) {
    super(props);
    this.state = { error: false };
  }

  componentDidCatch(error, errorInfo) {
    this.setState({ error, errorInfo });
  }

  render() {
    const { error } = this.state;

    return (
      <div>
        {error && (
          <FlagGroup>
            <Flag
              appearance="error"
              icon={<ErrorIcon label="Error" secondaryColor={colors.R400} />}
              id="error"
              key="error"
              title="Ops! Something went wrong..."
              description={error.message}
            />
          </FlagGroup>
        )}

        {!error && this.props.children}
      </div>
    );
  }
}
