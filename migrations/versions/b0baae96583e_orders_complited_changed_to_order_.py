"""orders.complited changed to order.status [String]

Revision ID: b0baae96583e
Revises: b0884f873094
Create Date: 2022-10-05 19:35:59.294833

"""
from alembic import op
import sqlalchemy as sa


# revision identifiers, used by Alembic.
revision = 'b0baae96583e'
down_revision = 'b0884f873094'
branch_labels = None
depends_on = None


def upgrade():
    # ### commands auto generated by Alembic - please adjust! ###
    op.add_column('orders', sa.Column('status', sa.String(), nullable=False))
    op.drop_column('orders', 'completed')
    # ### end Alembic commands ###


def downgrade():
    # ### commands auto generated by Alembic - please adjust! ###
    op.add_column('orders', sa.Column('completed', sa.BOOLEAN(), autoincrement=False, nullable=False))
    op.drop_column('orders', 'status')
    # ### end Alembic commands ###
