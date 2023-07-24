export interface IProduto {
    id: number;
    descricao: string;
    preco: number;
    descricaoPreco: string;
    imagem: string;
    quantidadeEstoque: number;
}

export const produtos: IProduto[] = [
    { id: 1, descricao: "iPhone 14 Pro Max 128Gb (Novo)", preco: 6999.00, descricaoPreco: "À vista no PIX", imagem: "/assets/iPhone14ProMax.png", quantidadeEstoque: 3 },
    { id: 2, descricao: "iPhone 13 Pro 256Gb (Semi Novo)", preco: 4899.00, descricaoPreco: "À vista no PIX", imagem: "/assets/iPhone13Pro.png", quantidadeEstoque: 2 },
    { id: 3, descricao: "AirPods Pro 2º geração (Novo)", preco: 1599.00, descricaoPreco: "À vista no PIX", imagem: "/assets/AirPodsPro2Geracao.png", quantidadeEstoque: 4 },
    { id: 4, descricao: "Magic Mouse 3 (Novo)", preco: 999.00, descricaoPreco: "À vista no PIX", imagem: "/assets/MagicMouse.png", quantidadeEstoque: 10 },
    { id: 5, descricao: "iPhone 12 128Gb (Semi Novo)", preco: 2999.00, descricaoPreco: "À vista no PIX", imagem: "/assets/iPhone12.png", quantidadeEstoque: 1 },
    { id: 6, descricao: "MacBook Air 2020 256Gb (Novo)", preco: 5999.00, descricaoPreco: "À vista no PIX", imagem: "/assets/MacBookAir2020.png", quantidadeEstoque: 1 },
    { id: 7, descricao: "Fonte iPhone 20W (Nova)", preco: 239.00, descricaoPreco: "À vista no PIX", imagem: "/assets/FonteApple20W.png", quantidadeEstoque: 30 },
    { id: 8, descricao: "Cabo USB-C iPhone (Novo)", preco: 149.00, descricaoPreco: "À vista no PIX", imagem: "/assets/CaboUSB-C.png", quantidadeEstoque: 30 },
    { id: 9, descricao: "iPhone 13 128Gb (Novo)", preco: 4299.00, descricaoPreco: "À vista no PIX", imagem: "/assets/iPhone13.png", quantidadeEstoque: 6 },
    { id: 10, descricao: "iPhone 11 64Gb (Semi Novo)", preco: 2299.00, descricaoPreco: "À vista no PIX", imagem: "/assets/iPhone11.png", quantidadeEstoque: 1 },
    { id: 11, descricao: "iPad 9º geração 64Gb (Novo)", preco: 2199.00, descricaoPreco: "À vista no PIX", imagem: "/assets/iPad9Geracao.png", quantidadeEstoque: 2 },
    { id: 12, descricao: "Apple Pencil 1º geração (Nova)", preco: 799.00, descricaoPreco: "À vista no PIX", imagem: "/assets/ApplePencil.png", quantidadeEstoque: 4 },
    { id: 13, descricao: "Carregador por indução (Novo)", preco: 199.00, descricaoPreco: "À vista no PIX", imagem: "/assets/MagSafeApple.png", quantidadeEstoque: 20 },
    { id: 14, descricao: "iPhone 12 Pro Max 128Gb (Semi Novo)", preco: 4199.00, descricaoPreco: "À vista no PIX", imagem: "/assets/iPhone12ProMax.png", quantidadeEstoque: 1 },
    { id: 15, descricao: "Teclado Magic Apple (Novo)", preco: 999.00, descricaoPreco: "À vista no PIX", imagem: "/assets/TecladoApple.png", quantidadeEstoque: 3 }
]