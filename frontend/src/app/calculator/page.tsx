'use client';

import { useState } from 'react';
import { Box, Paper, Typography, TextField, Grid } from '@mui/material';
import { Calculator, TrendingUp, DollarSign } from 'lucide-react';

export default function NFTCalculator() {
  const [roiInputs, setRoiInputs] = useState({
    purchasePrice: '',
    currentPrice: '',
    quantity: '1'
  });

  const [profitInputs, setProfitInputs] = useState({
    buyPrice: '',
    sellPrice: '',
    royalty: '5',
    gasFee: '0.01'
  });

  const [investmentInputs, setInvestmentInputs] = useState({
    initialInvestment: '',
    targetReturn: '',
    timeframe: '12'
  });

  const calculateROI = () => {
    const purchase = parseFloat(roiInputs.purchasePrice) || 0;
    const current = parseFloat(roiInputs.currentPrice) || 0;
    const qty = parseFloat(roiInputs.quantity) || 1;

    if (purchase === 0) return { roi: 0, profit: 0, total: 0 };

    const profit = (current - purchase) * qty;
    const roi = ((current - purchase) / purchase) * 100;
    const total = current * qty;

    return { roi, profit, total };
  };

  const calculateProfit = () => {
    const buy = parseFloat(profitInputs.buyPrice) || 0;
    const sell = parseFloat(profitInputs.sellPrice) || 0;
    const royalty = parseFloat(profitInputs.royalty) || 0;
    const gas = parseFloat(profitInputs.gasFee) || 0;

    const royaltyFee = sell * (royalty / 100);
    const totalCosts = buy + royaltyFee + gas;
    const netProfit = sell - totalCosts;
    const profitMargin = buy > 0 ? (netProfit / buy) * 100 : 0;

    return { netProfit, royaltyFee, totalCosts, profitMargin };
  };

  const calculateInvestment = () => {
    const initial = parseFloat(investmentInputs.initialInvestment) || 0;
    const target = parseFloat(investmentInputs.targetReturn) || 0;
    const months = parseFloat(investmentInputs.timeframe) || 12;

    const targetValue = initial * (1 + target / 100);
    const monthlyReturn = (target / months).toFixed(2);
    const requiredGrowth = targetValue - initial;

    return { targetValue, monthlyReturn, requiredGrowth };
  };

  const roiResults = calculateROI();
  const profitResults = calculateProfit();
  const investmentResults = calculateInvestment();

  return (
    <Box sx={{ display: 'flex', flexDirection: 'column', gap: 3 }}>
      {/* ROI Calculator */}
      <Paper sx={{ p: 3 }}>
        <Box sx={{ display: 'flex', aligs: 'center', gap: 2, mb: 3 }}>
          <Box sx={{ p: 1.5, bgcolor: '#a855f7', borderRadius: 1 }}>
            <TrendingUp size={24} color="white" />
          </Box>
          <Box>
            <Typography variant="h5" color="white">
              ROI Calculator
            </Typography>
            <Typography variant="body2" sx={{ color: '#c4b5fd' }}>
              Calculate your return on investment
            </Typography>
          </Box>
        </Box>

        <Grid container spacing={2} sx={{ mb: 3 }}>
          <Grid>
            <TextField
              fullWidth
              label="Purchase Price (ETH)"
              type="number"
              value={roiInputs.purchasePrice}
              onChange={(e) => setRoiInputs({ ...roiInputs, purchasePrice: e.target.value })}
              placeholder="0.00"
            />
          </Grid>

          <Grid>
            <TextField
              fullWidth
              label="Current Price (ETH)"
              type="number"
              value={roiInputs.currentPrice}
              onChange={(e) => setRoiInputs({ ...roiInputs, currentPrice: e.target.value })}
              placeholder="0.00"
            />
          </Grid>

          <Grid>
            <TextField
              fullWidth
              label="Quantity"
              type="number"
              value={roiInputs.quantity}
              onChange={(e) => setRoiInputs({ ...roiInputs, quantity: e.target.value })}
              placeholder="1"
            />
          </Grid>
        </Grid>

        <Grid container spacing={2} sx={{ p: 2, bgcolor: 'rgba(255, 255, 255, 0.05)', borderRadius: 1 }}>
          <Grid>
            <Typography variant="caption" sx={{ color: '#c4b5fd' }}>
              ROI
            </Typography>
            <Typography
              variant="h5"
            
              sx={{ color: roiResults.roi >= 0 ? '#4ade80' : '#f87171' }}
            >
              {roiResults.roi >= 0 ? '+' : ''}{roiResults.roi.toFixed(2)}%
            </Typography>
          </Grid>
          <Grid>
            <Typography variant="caption" sx={{ color: '#c4b5fd' }}>
              Profit/Loss
            </Typography>
            <Typography
              variant="h5"
            
              sx={{ color: roiResults.profit >= 0 ? '#4ade80' : '#f87171' }}
            >
              {roiResults.profit >= 0 ? '+' : ''}{roiResults.profit.toFixed(4)} ETH
            </Typography>
          </Grid>
          <Grid>
            <Typography variant="caption" sx={{ color: '#c4b5fd' }}>
              Total Value
            </Typography>
            <Typography variant="h5" color="white">
              {roiResults.total.toFixed(4)} ETH
            </Typography>
          </Grid>
        </Grid>
      </Paper>

      {/* Profit Calculator */}
      <Paper sx={{ p: 3 }}>
        <Box sx={{ display: 'flex', aligs: 'center', gap: 2, mb: 3 }}>
          <Box sx={{ p: 1.5, bgcolor: '#4ade80', borderRadius: 1 }}>
            <DollarSign size={24} color="white" />
          </Box>
          <Box>
            <Typography variant="h5" color="white">
              Profit Calculator
            </Typography>
            <Typography variant="body2" sx={{ color: '#c4b5fd' }}>
              Calculate net profit after fees
            </Typography>
          </Box>
        </Box>

        <Grid container spacing={2} sx={{ mb: 3 }}>
          <Grid>
            <TextField
              fullWidth
              label="Buy Price (ETH)"
              type="number"
              value={profitInputs.buyPrice}
              onChange={(e) => setProfitInputs({ ...profitInputs, buyPrice: e.target.value })}
              placeholder="0.00"
            />
          </Grid>

          <Grid>
            <TextField
              fullWidth
              label="Sell Price (ETH)"
              type="number"
              value={profitInputs.sellPrice}
              onChange={(e) => setProfitInputs({ ...profitInputs, sellPrice: e.target.value })}
              placeholder="0.00"
            />
          </Grid>

          <Grid>
            <TextField
              fullWidth
              label="Royalty (%)"
              type="number"
              value={profitInputs.royalty}
              onChange={(e) => setProfitInputs({ ...profitInputs, royalty: e.target.value })}
              placeholder="5"
            />
          </Grid>

          <Grid>
            <TextField
              fullWidth
              label="Gas Fee (ETH)"
              type="number"
              value={profitInputs.gasFee}
              onChange={(e) => setProfitInputs({ ...profitInputs, gasFee: e.target.value })}
              placeholder="0.01"
            />
          </Grid>
        </Grid>

        <Grid container spacing={2}>
          <Grid>
            <Box sx={{ p: 2, bgcolor: 'rgba(255, 255, 255, 0.05)', borderRadius: 1 }}>
              <Typography variant="caption" sx={{ color: '#c4b5fd' }}>
                Net Profit
              </Typography>
              <Typography
                variant="h4"
            
                sx={{ color: profitResults.netProfit >= 0 ? '#4ade80' : '#f87171' }}
              >
                {profitResults.netProfit >= 0 ? '+' : ''}{profitResults.netProfit.toFixed(4)} ETH
              </Typography>
              <Typography variant="body2" sx={{ color: '#c4b5fd', mt: 1 }}>
                Profit Margin: {profitResults.profitMargin >= 0 ? '+' : ''}{profitResults.profitMargin.toFixed(2)}%
              </Typography>
            </Box>
          </Grid>

          <Grid>
            <Box sx={{ display: 'flex', flexDirection: 'column', gap: 1.5 }}>
              <Box sx={{ display: 'flex', justifyContent: 'space-between', aligs: 'center', p: 1.5, bgcolor: 'rgba(255, 255, 255, 0.05)', borderRadius: 1 }}>
                <Typography variant="body2" sx={{ color: '#c4b5fd' }}>
                  Royalty Fee
                </Typography>
                <Typography variant="body1"color="white">
                  {profitResults.royaltyFee.toFixed(4)} ETH
                </Typography>
              </Box>
              <Box sx={{ display: 'flex', justifyContent: 'space-between', aligs: 'center', p: 1.5, bgcolor: 'rgba(255, 255, 255, 0.05)', borderRadius: 1 }}>
                <Typography variant="body2" sx={{ color: '#c4b5fd' }}>
                  Total Costs
                </Typography>
                <Typography variant="body1"color="white">
                  {profitResults.totalCosts.toFixed(4)} ETH
                </Typography>
              </Box>
            </Box>
          </Grid>
        </Grid>
      </Paper>

      {/* Investment Calculator */}
      <Paper sx={{ p: 3 }}>
        <Box sx={{ display: 'flex', aligs: 'center', gap: 2, mb: 3 }}>
          <Box sx={{ p: 1.5, bgcolor: '#60a5fa', borderRadius: 1 }}>
            <Calculator size={24} color="white" />
          </Box>
          <Box>
            <Typography variant="h5" color="white">
              Investment Target Calculator
            </Typography>
            <Typography variant="body2" sx={{ color: '#c4b5fd' }}>
              Plan your investment goals
            </Typography>
          </Box>
        </Box>

        <Grid container spacing={2} sx={{ mb: 3 }}>
          <Grid>
            <TextField
              fullWidth
              label="Initial Investment (ETH)"
              type="number"
              value={investmentInputs.initialInvestment}
              onChange={(e) => setInvestmentInputs({ ...investmentInputs, initialInvestment: e.target.value })}
              placeholder="0.00"
            />
          </Grid>

          <Grid>
            <TextField
              fullWidth
              label="Target Return (%)"
              type="number"
              value={investmentInputs.targetReturn}
              onChange={(e) => setInvestmentInputs({ ...investmentInputs, targetReturn: e.target.value })}
              placeholder="0"
            />
          </Grid>

          <Grid>
            <TextField
              fullWidth
              label="Timeframe (months)"
              type="number"
              value={investmentInputs.timeframe}
              onChange={(e) => setInvestmentInputs({ ...investmentInputs, timeframe: e.target.value })}
              placeholder="12"
            />
          </Grid>
        </Grid>

        <Grid container spacing={2} sx={{ p: 2, bgcolor: 'rgba(255, 255, 255, 0.05)', borderRadius: 1 }}>
          <Grid>
            <Typography variant="caption" sx={{ color: '#c4b5fd' }}>
              Target Value
            </Typography>
            <Typography variant="h5" color="white">
              {investmentResults.targetValue.toFixed(4)} ETH
            </Typography>
          </Grid>
          <Grid>
            <Typography variant="caption" sx={{ color: '#c4b5fd' }}>
              Required Growth
            </Typography>
            <Typography variant="h5" sx={{ color: '#60a5fa' }}>
              {investmentResults.requiredGrowth.toFixed(4)} ETH
            </Typography>
          </Grid>
          <Grid>
            <Typography variant="caption" sx={{ color: '#c4b5fd' }}>
              Monthly Return Needed
            </Typography>
            <Typography variant="h5" sx={{ color: '#a855f7' }}>
              {investmentResults.monthlyReturn}%
            </Typography>
          </Grid>
        </Grid>
      </Paper>
    </Box>
  );
}
