import React from 'react'

export default function BidAnAuction() {
    return (
        <Dialog
            open={open_bid_dialog}
        >
            <DialogTitle onClose={() => setOpen_bid_dialog(!open_bid_dialog)}>
                Bid For An Auction
            </DialogTitle>
            {
                biderror
                    ? <Alert severity="error">status :{bidstatus} <br />statusText:{bidstatusText} <br /> error:{biderror}</Alert>
                    : null
            }
            {
                bidstatus === 200
                    ? <Alert severity="success">status :{bidstatus} : your request to bid is successfuly submited</Alert>
                    : null
            }
            <DialogContent >
                <Grid spacing={3}>
                    <Grid item xs={12} sm={12}>
                        <TextField
                            required
                            id="description"
                            name="description"
                            label="description"
                            value={state.description}
                            multiline
                            fullWidth
                            autoComplete="description"
                            onChange={(e) => {
                                setState({ ...state, description: e.target.value })
                            }}
                        />
                    </Grid>

                    <Grid item xs={12} sm={12}>
                        <TextField
                            required
                            type="number"
                            id="amount"
                            name="amount"
                            label="amount"
                            multiline
                            fullWidth
                            autoComplete="amount"
                            value={state.amount}
                            onChange={(e) => {
                                setState({ ...state, amount: e.target.value })
                            }}
                        />
                    </Grid>
                    <Grid item xs={12} sm={12}>
                        <TextField
                            required
                            type="number"
                            id="cpo"
                            name="cpo"
                            label="cpo"
                            multiline
                            fullWidth
                            autoComplete="cpo"
                            value={state.cpo}
                            onChange={(e) => {
                                setState({ ...state, cpo: e.target.value })
                            }}
                        />
                    </Grid>
                    <Grid item xs={12} sm={12} className={classes.dialogbtn1} >
                        <input
                            accept="image/*"
                            style={{ display: 'none' }}
                            multiple
                            id="raised-button-file"
                            onChange={(e) => {
                                setState({ ...state, proposalDocument: e.target.files[0] });
                            }}
                            type="file"
                        />
                        <label htmlFor="raised-button-file">
                            <Button variant="outlined" component="span" className={classes.button}>
                                Upload Doc if any
                            </Button>
                        </label>
                        <label>{state.proposalDocument.name}</label>
                    </Grid>

                    <Grid className={classes.dialogbtn2}>
                        <Button
                            color="primary"
                            variant="contained"
                            onClick={async () => {
                                const formData = new FormData();
                                formData.append('amount', state.amount);
                                formData.append('auctionId', data._id);
                                formData.append('cpo', state.cpo);
                                formData.append('description', state.description);
                                formData.append('ownerId', data.owner);
                                formData.append('proposalDocument', state.proposalDocument);
                                formData.append('proposalType', data.auctionType);
                                await dispatch(BidAuctionAction(formData, token));
                            }}
                        >Submite Bid</Button>
                    </Grid>
                </Grid>
            </DialogContent >
        </Dialog>

    )
}
