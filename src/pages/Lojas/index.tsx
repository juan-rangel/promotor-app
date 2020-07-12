import React from "react";
import { connect } from "react-redux";
import { View, Button } from "react-native";
import { bindActionCreators, Dispatch } from "redux";

import { ILoja } from "../../store/ducks/lojas/types";
import { IApplicationState } from "../../store";
import { LojaItem } from "../../components/LojaItem";
import { useActionFetch } from "../../hooks";
import { ActionLoadSuccess } from "../../store/ducks/lojas/actions";

interface IStateProps {
  lojas: ILoja[];
}

interface DispatchProps {
  loadRequest(): void;
}

type Props = IStateProps & DispatchProps;

// usa o SWR ou vc usa o SAGAS

const LojaListas: React.FC<Props> = (props) => {
  // props.ActionLoadSuccess();
  useActionFetch("users/Gabriel-Silverio-96/repos", props.loadRequest);

  return (
    <View>
      {props.lojas?.map((loja) => (
        <LojaItem key={loja.id} loja={loja} />
      ))}
    </View>
  );
};

const mapStateToProps = (state: IApplicationState) => ({
  lojas: state.lojas.data,
});

export default connect(mapStateToProps, { ActionLoadSuccess })(LojaListas);
