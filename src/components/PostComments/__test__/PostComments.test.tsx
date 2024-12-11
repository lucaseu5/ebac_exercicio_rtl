import { fireEvent, render, screen } from '@testing-library/react';
import PostComment from '..';

describe('Teste para o componente PostComment', () => {
    it('Deve renderizar o componente corretamente', () => {
        render(<PostComment/>);
        expect(screen.getByText('Comentar')).toBeInTheDocument();
    });

    it('Deve adicionar dois comentários', () => {
        render(<PostComment/>);
        fireEvent.change(screen.getByTestId('textarea'), {
            target: {
                value: 'Comentário adicionado no teste',
            }
        });
        fireEvent.click(screen.getByTestId('botao'));

        fireEvent.change(screen.getByTestId('textarea'), {
            target: {
                value: 'Segundo comentário no teste',
            }
        });
        fireEvent.click(screen.getByTestId('botao'));

        expect(screen.getAllByTestId('elemento')).toHaveLength(2);
    });
});