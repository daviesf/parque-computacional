<template>
    <section class="home-section">
        <span class="text titlep">
            <h1>Tela de Chamados de HelpDesk</h1>
        </span>
        <div class="ui container table-p">
            <div class="ui stackable grid">
                <div class="five wide column" style="margin-top: 20px">
                    <div class="ui vertical menu">
                        <div class="header item">Filtros</div>

                        <div class="accordion">
                            <div class="accordion-header">
                                <span>Nome</span>
                                <span class="accordion-icon">+</span>
                            </div>
                            <div class="accordion-body">
                                <div class="ui icon input fluid">
                                    <input type="text" placeholder="Nome do funcionário" class="fluid"
                                        id="filter-funcionário" />
                                    <i class="search icon"></i>
                                </div>
                            </div>
                        </div>
                        <div class="accordion">
                            <div class="accordion-header">
                                <span>Bancada</span>
                                <span class="accordion-icon">+</span>
                            </div>
                            <div class="accordion-body">
                                <div class="ui icon input fluid">
                                    <input type="text" placeholder="ID da bancada" class="fluid" id="filter-idBancada" />
                                    <i class="search icon"></i>
                                </div>
                            </div>
                        </div>
                        <div class="accordion">
                            <div class="accordion-header">
                                <span>Descrição</span>
                                <span class="accordion-icon">+</span>
                            </div>
                            <div class="accordion-body">
                                <div class="ui icon input fluid">
                                    <input type="text" placeholder="Descrição da Manutenção" class="fluid"
                                        id="filter-descricao" />
                                    <i class="search icon"></i>
                                </div>
                            </div>
                        </div>
                        <div class="accordion">
                            <div class="accordion-header">
                                <span>Status</span>
                                <span class="accordion-icon">+</span>
                            </div>
                            <div class="accordion-body">
                                <div class="ui two column grid">
                                    <div class="column">
                                        <div class="ui checkbox">
                                            <input type="checkbox" id="cb-ativo" />
                                            <label>Ativo</label>
                                        </div>
                                        <div class="ui checkbox">
                                            <input type="checkbox" id="cb-inativo" />
                                            <label>Inativo</label>
                                        </div>
                                    </div>
                                    <div class="column">
                                        <div class="ui checkbox">
                                            <input type="checkbox" id="cb-manut" />
                                            <label>Manutenção</label>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div class="item">
                            <div class="ui icon input fluid">
                                <button class="button1" id="filter">
                                    <span class="button1-content"><i class="search icon"></i>Aplicar Filtro</span>
                                </button>
                            </div>
                        </div>
                    </div>
                </div>

                <div class="eleven wide column" style="margin-top: 20px">
                    <table class="ui compact celled definition table">
                        <thead>
                            <tr>
                                <td class="collapsing">
                                    <div class="ui fitted checkbox">
                                        <input type="checkbox" id="select-all" />
                                        <label></label>
                                    </div>
                                </td>
                                <th class="wide-200"> Nome </th>
                                <th class="wide-80"> Bancada </th>
                                <th class="wide-200"> Data e hora </th>
                                <th class="wide-50"> Descrição </th>
                                <th class="wide-100">Status</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td class="collapsing">
                                    <div class="ui fitted checkbox">
                                        <input type="checkbox" class="select-checkbox" /> <label></label>
                                    </div>
                                </td>
                                <td>Pedro Alves</td>
                                <td>22</td>
                                <td>01/01/1998 & 06:00</td>
                                <td class="td-desc"><button type="submit" class="ui button desc">Ver</button></td>
                                <td>Pendente</td>
                            </tr>
                            <tr>
                                <td class="collapsing">
                                    <div class="ui fitted checkbox">
                                        <input type="checkbox" class="select-checkbox" /> <label></label>
                                    </div>
                                </td>
                                <td>Maria Eduarda</td>
                                <td>32</td>
                                <td>12/02/2023 & 07:30</td>
                                <td class="td-desc"><button type="submit" class="ui button desc">Ver</button></td>
                                <td>Resolvido</td>
                            </tr>

                            <tr>
                                <td class="collapsing">
                                    <div class="ui fitted checkbox">
                                        <input type="checkbox" class="select-checkbox" /> <label></label>
                                    </div>
                                </td>
                                <td>Davie Schimdt</td>
                                <td>13</td>
                                <td>20/03/2023 & 09:47</td>
                                <td class="td-desc"><button type="submit" class="ui button desc">Ver</button></td>
                                <td>Pendente</td>
                            </tr>
                            <tr>
                                <td class="collapsing">
                                    <div class="ui fitted checkbox">
                                        <input type="checkbox" class="select-checkbox" /> <label></label>
                                    </div>
                                </td>
                                <td>Samuel Pereira</td>
                                <td>17</td>
                                <td>19/04/2023 & 11:16</td>
                                <td class="td-desc"><button type="submit" class="ui button desc">Ver</button></td>
                                <td>Resolvido</td>
                            </tr>
                        </tbody>
                        <tfoot class="full-width">
                            <tr>
                                <th></th>
                                <th colspan="5">
                                    <div class="ui right floated small labeled icon button" id="add-patrimonio">
                                        <i class="keyboard outline icon"></i> Resolver chamado
                                    </div>
                                    <div class="ui left floated small button">Marcar como Resolvido</div>
                                    <div class="ui left floated small button">Remover Chamado</div>
                                </th>
                            </tr>
                        </tfoot>
                    </table>
                </div>
            </div>
        </div>
    </section>
</template>

<script>
export default {
    name: 'HelpDesk',
    mounted() {
        const selectCheckboxes = document.getElementsByClassName('select-checkbox');
        const selectAllCheckbox = document.getElementById('select-all');

        // Selecione todos os checkboxes quando o checkbox geral é selecionado
        selectAllCheckbox.addEventListener('click', function () {
            for (var i = 0; i < selectCheckboxes.length; i++) {
                selectCheckboxes[i].checked = this.checked
            }
        })
    }
}
</script>

<style src="../assets/pages.css"></style>
