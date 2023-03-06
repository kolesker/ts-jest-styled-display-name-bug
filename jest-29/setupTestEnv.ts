import { configure } from 'enzyme';
import EnzymeAdapter from 'enzyme-adapter-react-16';
import 'jest-styled-components';

configure({ adapter: new EnzymeAdapter() });

